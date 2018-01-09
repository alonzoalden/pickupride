import { Component } from '@angular/core';
import { keys } from '../../env-config';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
//import { ApiService } from './shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    public auth: AuthService,
    public userService: UserService,
    //public apiService: ApiService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe(params => {
          let code = params['code'];
          if (code) {
            //send code to back end
            this.userService.createUser(code, this.auth.getToken());
          //on back end:
          //send code client_id and client_secret to strava to get access token and user information back
          //save into database along with auth0 id/email
        }
        else {
            this.auth.handleAuthentication();

            if (this.auth.isAuthenticated()) {
                this.auth.populate();
            }
        }
     });
  }

}
