import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../shared-services/restaurant-service.component';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.css']
})
export class RidersComponent implements OnInit {

  constructor(private res: RestaurantService) { }

  ngOnInit() {
    this.res.getRestaurant().subscribe(res => {
      console.log(res);
    })
  }

}
