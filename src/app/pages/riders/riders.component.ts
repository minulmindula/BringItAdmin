import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../shared-services/restaurant-service.component';
import { PageEvent } from '@angular/material';
import { UserService } from '../../shared-services/user-service.component';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.css']
})
export class RidersComponent implements OnInit {

  length = 1000;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;
  books = [];
  bookChunks = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getDrivers().then(
      res => {
        console.log(res);
      }
    )
  }

}
