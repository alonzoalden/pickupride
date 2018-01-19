import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiscoverComponent } from './discover.component';

const discoverRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: DiscoverComponent,
  }
]);

@NgModule({
  imports: [
      asdfasdf
    discoverRouting,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    DiscoverComponent
  ]
})
export class DiscoverModule {}
