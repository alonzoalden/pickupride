import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
    constructor(
        public auth: AuthService,
        private userService: UserService
    ) {}
    ngOnInit() {}

    private displayName() {
        if (this.auth.isAuthenticated()) {
            let user = this.auth.getCurrentUser();
            if (user) {
                return user.firstname + ' ' + user.lastname;
            }
        }
        else {
          return 'Retreiving info..';
        }
    }
  
}