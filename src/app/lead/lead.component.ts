import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ApiService } from '../shared/services/api.service';
import { User } from '../shared/models/user.model';

@Component({
    selector: 'lead',
    templateUrl: './lead.component.html',
    styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {
    currentUser: User;
    constructor(
        private auth: AuthService,
        private apiService: ApiService
    ) { }

    ngOnInit() {
        this.auth.currentUser.subscribe(
            (userData: User) => {
                    console.log(userData);
                    this.currentUser = userData;
                    this.apiService.get(`user/routes/${this.currentUser._id}`)
                        .subscribe((response)=> {
                            console.log(response);
                        })
                }
        )
    }

}