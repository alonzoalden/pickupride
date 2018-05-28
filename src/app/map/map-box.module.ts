import { ModuleWithProviders, NgModule } from '@angular/core';
import { MapBoxComponent } from './map-box.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { keys as AUTH_CONFIG } from '../../../env-config';

@NgModule({
    imports: [
        NgxMapboxGLModule.forRoot({
            accessToken: AUTH_CONFIG.MAPBOX_ACCESS_TOKEN
        }),
    ],
	declarations: [
		MapBoxComponent
	],
	exports: [
		MapBoxComponent
	]
})
export class MapboxModule {}
