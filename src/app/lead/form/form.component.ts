import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import { MatDialog } from '@angular/material';
import {
    UserService,
    RouteService
} from '../../shared/services/index';
import { Route } from '../../shared/models/index';
import { UnderConstructionComponent } from './under-construction.component';

@Component({
	selector: 'form',
	templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

    routeData; 
    checked = false;
    private rideTypes = ['Adventure', 'Workout', 'Race']

    constructor(
        private user: UserService,
        private routeService: RouteService,
        private dialog: MatDialog
    ) { }
  
	ngOnInit() {
        this.routeService.currentRoutes.subscribe(
            data => this.routeData = data,
            err => console.log('error retrieving leader routes', err)
        )
	}
    private inviteOnlyWarning() {
		let dialogRef = this.dialog.open(UnderConstructionComponent, {
		width: '300px',
		height: '100px'
		});
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
