import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DiscoverModule } from './discover/discover.module';
import { MapboxModule } from './map/map-box.module';
import { LeadModule } from './lead/lead.module';
import { keys as AUTH_CONFIG } from '../../env-config';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import {
	MatToolbarModule,
	MatMenuModule,
	MatButtonModule,
	MatTabsModule,
	MatSidenavModule,
	MatListModule,
	MatProgressSpinnerModule
} from '@angular/material';

import 'hammerjs';
import {
	ApiService,
	JwtService,
	UserService,
	RouteService
} from './shared/services';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent
	],
	imports: [
		MapboxModule,
		DiscoverModule,
		LeadModule,
		BrowserModule,
		rootRouting,
		FormsModule,
		HttpModule,
		MatTabsModule,
		MatToolbarModule,
		MatSidenavModule,
		MatButtonModule,
		MatMenuModule,
		FlexLayoutModule,
		BrowserAnimationsModule,
		MatProgressSpinnerModule,
	],
	providers: [
		ApiService,
		JwtService,
		UserService,
		RouteService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }