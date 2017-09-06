import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RideComponent } from './discover/ride/ride.component';
import { DiscoverComponent } from './discover/discover.component';
import { LoginComponent } from './login/login.component';

import 'hammerjs';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RideComponent,
    DiscoverComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    rootRouting,
    FormsModule,
    HttpModule,
    MdTabsModule,
    MdSidenavModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }