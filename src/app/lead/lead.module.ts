import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeadComponent } from './lead.component';
import { FormComponent } from './form/form.component';
import { RouteComponent } from './route/route.component';
import { MapboxModule } from '../map/map-box.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { UnderConstructionComponent } from './form/under-construction.component';
const leadRouting: ModuleWithProviders = RouterModule.forChild([
	{
		path: 'lead',
		component: LeadComponent,
	},
	{
		path: 'lead/details',
		component: FormComponent,
	}
	
]);

@NgModule({
	imports: [
		leadRouting,
		MapboxModule,
		MatButtonModule,
		MatToolbarModule,
		MatMenuModule,
		MatListModule,
		FlexLayoutModule,
		MatSidenavModule,
		MatSlideToggleModule,
		BrowserAnimationsModule,
		RouterModule,
		MatProgressSpinnerModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatTooltipModule,
		MatSelectModule
	],
	declarations: [
		LeadComponent,
		RouteComponent,
		FormComponent,
		UnderConstructionComponent
	],
	entryComponents: [UnderConstructionComponent]
})
export class LeadModule {}
