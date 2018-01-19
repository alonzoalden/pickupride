import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RideComponent } from './ride.component';

// const headerRouting: ModuleWithProviders = RouterModule.forChild([
//   {
//     path: '?code',
//     component: AppComponent,
//   }
// ]);

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    RideComponent
  ]
})
export class RideModule {}
