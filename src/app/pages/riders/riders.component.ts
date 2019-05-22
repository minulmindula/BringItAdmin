import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../shared-services/restaurant-service.component';
import { PageEvent } from '@angular/material';

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

  constructor(private res: RestaurantService) { }

  ngOnInit() {
    this.res.getRestaurant().subscribe(res => {
      console.log(res);
    })
  }

}
