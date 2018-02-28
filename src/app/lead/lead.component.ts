import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';

import {
    UserService,
    RouteService
} from '../shared/services/index';

@Component({
    selector: 'lead',
    templateUrl: './lead.component.html',
    styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {
    currentUser: User;
    constructor(
        private user: UserService,
        private routes: RouteService
    ) { }

    ngOnInit() {
        this.user.currentUser.subscribe(
            (userData: User) => {
                this.currentUser = userData;
                this.routes.getLeaderRoutes();
            }
        )
    }

}