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
import { LeadComponent } from './lead.component';

const leadRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'lead',
    component: LeadComponent,
  }
]);

@NgModule({
  imports: [
    leadRouting,
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
    LeadComponent
  ]
})
export class LeadModule {}
