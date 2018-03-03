import { Component, OnInit } from '@angular/core';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import {
    UserService,
    RouteService
} from '../../shared/services/index';
import { Route } from '../../shared/models/index';

@Component({
	selector: 'route',
	templateUrl: './route.component.html',
    styleUrls: ['./route.component.scss']
})

export class RouteComponent implements OnInit {

    routeData; 
    
    constructor(
        private user: UserService,
        private routeService: RouteService
    ) { }
  
	ngOnInit() {
        this.routeService.currentRoutes.subscribe(
            data => this.routeData = data,
            err => console.log('error retrieving leader routes', err)
        )
	}

    private selectRoute(route: Route) {
        this.routeService.selectedRouteSubject.next(route);
    }
    private getSmallMap(encodedPolyline: string) {
        return 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/path('
        + encodeURIComponent(encodedPolyline)
        + ')/auto/300x250?access_token='
        + AUTH_CONFIG.MAPBOX_ACCESS_TOKEN;
    }

    private convertToMiles(meter: number) {
        return (meter * 0.000621371).toFixed(1);
    }
    private convertToFeet(meter: number) {
        return (meter * 3.28084).toFixed(0);
    }
}
