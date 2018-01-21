import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiscoverComponent } from './discover.component';
import { RideComponent } from './ride/ride.component';

const discoverRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: DiscoverComponent,
  }
]);

@NgModule({
  imports: [
    discoverRouting,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    DiscoverComponent,
    RideComponent
  ]
})
export class DiscoverModule {}
