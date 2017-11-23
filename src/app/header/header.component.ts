import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { keys } from '../../../env-config';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        let code = params['code'];
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