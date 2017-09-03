import { Component, OnInit } from '@angular/core';
import { keys } from '../../../env-config';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  ngOnInit() {
  }

  loggedIn = false;
  

  login() {
    this.loggedIn = true;
  } 

  stravaLogin() {   
    window.location.href = "https://www.strava.com/oauth/authorize?client_id=" + keys.STRAVA_CLIENT_ID + "&response_type=code&redirect_uri=" + keys.DEV_URL + "?scope=write&state=mystate&approval_prompt=force" ;
  }
}