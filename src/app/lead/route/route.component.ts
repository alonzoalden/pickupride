import { Component, OnInit } from '@angular/core';
import { keys as AUTH_CONFIG } from '../../../../env-config';
import {
    UserService,
    RouteService
} from '../../shared/services/index';

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

    private getSmallMap(encodedPolyline: String) {
        return 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/pin-s-a+9ed4bd(-122.46589,37.77343),pin-s-b+000(-122.42816,37.75965),path-5+f44-0.7('
        + encodedPolyline
        + ')/auto/140x90?access_token='
        + AUTH_CONFIG.MAPBOX_ACCESS_TOKEN;
    }
}
