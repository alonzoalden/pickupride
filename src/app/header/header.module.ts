import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header.component';

// const headerRouting: ModuleWithProviders = RouterModule.forChild([
//   {
//     path: ':code',
//     component: HeaderComponent,
//   }
// ]);

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent
  ]
})
export class HeaderModule {}
