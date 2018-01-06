import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private http: Http,
    private jwtService: JwtService,
  ) {}

  createUser(code: String) {
    this.apiService.post(`user/register`, {code: code})
            .subscribe(
                data => this.setUser(data.user),
                err => console.log('err')
            );
  }

  setUser(user: User) {
    // If user does not have strava credentials, redirect to strava oauth page:
    if (!user) {
      window.location.href = "https://www.strava.com/oauth/authorize?client_id=" 
            + AUTH_CONFIG.STRAVA_CLIENT_ID + "&response_type=code&redirect_uri=" 
            + AUTH_CONFIG.DEV_URL + "?scope=write&state=mystate&approval_prompt=force";
    } 
    else {
      // Set current user data into observable
      this.currentUserSubject.next(user);
      // Set isAuthenticated to true
      this.isAuthenticatedSubject.next(true);
    }
  }

  purgeUser() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next(new User());
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
    .put('/user', { user })
    .map(data => {
      // Update the currentUser observable
      this.currentUserSubject.next(data.user);
      return data.user;
    });
  }

}
