import { Component, OnInit } from '@angular/core';
import { User, Route } from '../shared/models/index';

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
    currentRoute: Route;
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
        this.routes.currentRoutes.subscribe(
            (routeData: Route) => {
                this.currentRoute = routeData;
            }
        )
    }

    routeListView() {
        this.routes.selectedRouteSubject.next(new Route());
    }

}