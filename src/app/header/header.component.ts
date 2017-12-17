import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { keys } from '../../../env-config';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, public auth: AuthService) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        let code = params['code'];
        if (code) {
          //send code client_id and client_secret to strava to get access token and user information back
          //save token using jwtService as a cookies/thing whatevz
          //use this token for all strava api requests, attach as header in config.
          
        }
      });
  }

  loggedIn = false;
  

  login() {
    this.loggedIn = true;
  } 

  stravaLogin() {   
    window.location.href = "https://www.strava.com/oauth/authorize?client_id=" 
    + keys.STRAVA_CLIENT_ID + "&response_type=code&redirect_uri=" 
    + keys.DEV_URL + "?scope=write&state=mystate&approval_prompt=force" ;
  }
}