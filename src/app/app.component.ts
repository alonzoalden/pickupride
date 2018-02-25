import { Component } from '@angular/core';
import { keys } from '../../env-config';
import { UserService } from './shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {

	constructor(
		private user: AuthService,
		private userService: UserService,
		private activatedRoute: ActivatedRoute,
	) {}

	ngOnInit() {
		this.activatedRoute.queryParams.subscribe(params => {
			let code = params['code'];
			if (code) {
				this.user.createUser(code, this.user.getToken());
			}
			else {
				this.user.handleAuthentication();

				if (this.user.isAuthenticated()) {
					this.user.populate();
				}
			}
		});
	}
}