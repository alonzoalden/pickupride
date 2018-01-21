import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatToolbarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DiscoverModule } from './discover/discover.module';
import { LeadModule } from './lead/lead.module';

import 'hammerjs';
import {
  ApiService,
  JwtService,
  UserService,
  AuthService
} from './shared/services';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);
// const appRoutes: Routes = [
//   {
//     path: '',
//     component: AppComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
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
    MatProgressSpinnerModule
  ],
  providers: [
    ApiService,
    JwtService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }