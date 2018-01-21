import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  constructor (
    private apiService: ApiService,
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}


  createUser(code: String, accessToken: String) {
      const credentials = {
          code: code,
          accessToken: accessToken,
      };
      this.apiService.post(`user/register`, credentials)
            .subscribe(
                data => this.authService.setUser(data.user),
                err => console.log('err:', err)
            );
  }

  

  // // Update the user on the server (email, pass, etc)
  // update(user): Observable<User> {
  //   return this.apiService
  //   .put('/user', { user })
  //   .map(data => {
  //     // Update the currentUser observable
  //     this.currentUserSubject.next(data.user);
  //     return data.user;
  //   });
  // }

}
