import { ModuleWithProviders, NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';
// import { MatToolbarModule } from '@angular/material';
// import { MatButtonModule } from '@angular/material';
// import { MatMenuModule } from '@angular/material';
// import { MatListModule } from '@angular/material';
// import { MatSidenavModule } from '@angular/material';
// import { MatProgressSpinnerModule } from '@angular/material';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatCardModule } from '@angular/material/card';
// import { FlexLayoutModule } from "@angular/flex-layout";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LeadComponent } from '../lead/lead.component';
// import { RouteComponent } from '../lead/route/route.component';
import { MapBoxComponent } from './map-box.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { keys as AUTH_CONFIG } from '../../../env-config';

// const leadRouting: ModuleWithProviders = RouterModule.forChild([
//   {
//     path: 'lead',
//     component: MapboxModule,
//   }
// ]);

@NgModule({
    imports: [
        NgxMapboxGLModule.forRoot({
            accessToken: AUTH_CONFIG.MAPBOX_ACCESS_TOKEN
        }),
    // leadRouting,
    // MatButtonModule,
    // MatToolbarModule,
    // MatMenuModule,
    // MatListModule,
    // FlexLayoutModule,
    // MatSidenavModule,
    // BrowserAnimationsModule,
    // RouterModule,
    // MatProgressSpinnerModule,
    // MatGridListModule,
    // MatCardModule
    ],
	declarations: [
		MapBoxComponent
	],
	exports: [
		MapBoxComponent
	]
})
export class MapboxModule {}
