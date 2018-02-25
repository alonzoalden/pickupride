import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/index';

@Component({
  selector: 'discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  constructor(
    private user: UserService
  ) { }

  ngOnInit() {
  }

}