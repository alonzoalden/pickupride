import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header.component';

const headerRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: ':code',
    component: HeaderComponent,
  }
]);

@NgModule({
  imports: [
    headerRouting,
    MaterialModule,
    MdTabsModule,
    MdSidenavModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HeaderComponent
  ]
})
export class HeaderModule {}
