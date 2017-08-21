import { Component, OnInit } from '@angular/core';

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
}