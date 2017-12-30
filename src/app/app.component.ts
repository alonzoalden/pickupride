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
  }

  ngOnInit() {
    //check to see if params are there.
    this.activatedRoute.queryParams.subscribe(params => {
        let code = params['code'];
        if (code) {
          window.location.href = "https://www.strava.com/oauth/authorize?client_id=" 
          + keys.STRAVA_CLIENT_ID + "&response_type=code&redirect_uri=" 
          + keys.DEV_URL + "?scope=write&state=mystate&approval_prompt=force";

          //send code client_id and client_secret to back end

          //on back end:
          //send code client_id and client_secret to strava to get access token and user information back
          
        }
      });
  }

}
