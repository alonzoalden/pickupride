import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { keys as AUTH_CONFIG } from '../../../../env-config';

@Component({
	selector: 'app-user-confirm',
	templateUrl: './under-construction.component.html'
})
export class UnderConstructionComponent {

constructor(
	public dialogRef: MatDialogRef<UnderConstructionComponent>
	){ }

	onNoClick(): void {
		this.dialogRef.close();
	}

}
