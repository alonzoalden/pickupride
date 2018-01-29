import { Component } from '@angular/core';
import { keys } from '../../env-config';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
//import { ApiService } from './shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe(params => {
          let code = params['code'];
          if (code) {
            this.userService.createUser(code, this.auth.getToken());
        }
        else {
            this.auth.handleAuthentication();

            if (this.auth.isAuthenticated()) {
                this.auth.populate();
            }
        }
     });
  }
}