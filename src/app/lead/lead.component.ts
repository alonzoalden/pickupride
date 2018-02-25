import { Component, OnInit } from '@angular/core';
import { UserService, ApiService } from '../shared/services/index';
import { User } from '../shared/models/user.model';

@Component({
    selector: 'lead',
    templateUrl: './lead.component.html',
    styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {
    currentUser: User;
    constructor(
        private user: UserService,
        private apiService: ApiService
    ) { }

    ngOnInit() {
        this.user.currentUser.subscribe(
            (userData: User) => {
                this.currentUser = userData;
                this.apiService.get(`user/routes/${this.currentUser._id}`)
                    .subscribe((response)=> {
                        console.log(response);
                    })
                }
        )
    }

}