import { Component } from '@angular/core';

@Component({
  selector: 'map',
  styles: [ require('./map-box.component.scss') ],
  template: require('./map-box.component.html'),
})
export class MapBoxComponent {
	bounds: any
	constructor() { }
	ngOnInit() {
	}

	ngAfterViewInit() {
		setTimeout(() => {
		this.bounds = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
		}, 2000)
	}
}