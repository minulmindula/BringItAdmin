import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { RestaurantService, RestaurantInputDto } from '../../../shared-services/restaurant-service.component';

@Component({
  selector: 'app-restaurants-create',
  templateUrl: './restaurants-create.component.html',
  styleUrls: ['./restaurants-create.component.scss']
})
export class RestaurantsCreateComponent implements OnInit {

  restaurant: RestaurantInputDto = new RestaurantInputDto();

  constructor(
    private dialogRef:MatDialogRef<RestaurantsCreateComponent>,
    private _resService:RestaurantService,
  ) { }

  ngOnInit() {
  }

  closeEditForm(){
    this.dialogRef.close();
  }

  onCreate(data:RestaurantInputDto){
    this._resService.insertRestaurant(data).subscribe(res=>{
      this.dialogRef.close();
      location.reload();
      console.log("this was called");
    })
  }
}
