import { Component } from '@angular/core';
import { keys } from '../../env-config';
import { AuthService } from './shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    public auth: AuthService,
    private activatedRoute: ActivatedRoute,
  ) {
    auth.handleAuthentication();

    if (auth.isAuthenticated()) {
        auth.populate();
    }
  }

  ngOnInit() {
    //check to see if params are there.
    this.activatedRoute.queryParams.subscribe(params => {
        let code = params['code'];
        if (code) {
          //send code client_id and client_secret to back end

          //on back end:
          //send code client_id and client_secret to strava to get access token and user information back
          //save into database along with auth0 id/email
        }
      });
  }

}
