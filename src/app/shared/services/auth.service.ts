import { Injectable } from '@angular/core';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import 'rxjs/add/operator/filter';
import Auth0Lock from 'auth0-lock';
import { User } from '../models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class AuthService {

  lock = new Auth0Lock(AUTH_CONFIG.clientID, AUTH_CONFIG.domain, {
    oidcConformant: true,
    autoclose: true,
    auth: {
      redirectUrl: AUTH_CONFIG.callbackURL,
      responseType: 'token id_token',
      audience: `https://${AUTH_CONFIG.domain}/userinfo`,
      params: {
        scope: 'openid email'
      }
    }
  });

  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  //public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
      public router: Router, 
      private apiService: ApiService,
      private jwtService: JwtService,
      private activatedRoute: ActivatedRoute,
  ) {}

  public login(): void {
    this.lock.show();
  }

  public isLoading = false;

  // Call this method in app.component.ts
  // if using path-based routing
  public handleAuthentication(): void {
    this.lock.on('authenticated', (authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(['/']);
        this.populate();
        //send info to back end
        //backend calls getinfo and saves info into database. 

      }
    });
    this.lock.on('authorization_error', (err) => {
      this.router.navigate(['/']);
      console.log(err);
      alert(`Error: ${err.error}. Check the console for further details.`);
    });
  }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  public populate() {
        this.isLoading = true;
        // If JWT detected, attempt to get & store user's info
        if (this.isAuthenticated()) {
            this.apiService.get(`user/${this.jwtService.getAccessToken()}`)
            .subscribe(
                data => this.setUser(data.user),
                err => console.log('err')
            );
        } else {
        // Remove any potential remnants of previous auth states
            this.logout();
        }
  }
  
  public setUser(user: User) {
    this.activatedRoute.queryParams.subscribe(params => {
        let code = params['code'];

        if (this.isAuthenticated()) {
            if (!code && !user) {
                window.location.href = "https://www.strava.com/oauth/authorize?client_id=" 
                + AUTH_CONFIG.STRAVA_CLIENT_ID + "&response_type=code&redirect_uri=" 
                + AUTH_CONFIG.DEV_URL + "?scope=write&state=mystate&approval_prompt=force";
            }
            else {
                // Set current user data into observable
                this.currentUserSubject.next(user);
                // Set isAuthenticated to true
                this.isAuthenticatedSubject.next(true);
                this.isLoading = false;
            }
        }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    //this.router.navigate(['/']);
    
    // Set current user to an empty object
    this.currentUserSubject.next(new User());
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  public getToken(): String {
    return window.localStorage['access_token'];
  }
}
