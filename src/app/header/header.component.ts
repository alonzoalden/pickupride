import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
    currentUser: User;
    constructor(
        private auth: AuthService,
        private userService: UserService
    ) {}
    ngOnInit() {
        this.auth.currentUser.subscribe(
                (userData: User) => {
                    this.currentUser = userData;
                }
            );
    }
  
}