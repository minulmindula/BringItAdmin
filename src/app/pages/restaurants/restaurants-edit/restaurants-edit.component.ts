import { RestaurantService, RestaurantOutputDto } from './../../../shared-services/restaurant-service.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RestaurantInputDto } from '../../../shared-services/restaurant-service.component';

@Component({
  selector: 'app-restaurants-edit',
  templateUrl: './restaurants-edit.component.html',
  styleUrls: ['./restaurants-edit.component.scss']
})
export class RestaurantsEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RestaurantsEditComponent>,
    @Inject(MAT_DIALOG_DATA) public res : RestaurantOutputDto,
    private restService : RestaurantService,
  ) { }

  ngOnInit() {
  }

  closeEditForm(){
    this.dialogRef.close();
  }

  onSubmit(data: RestaurantInputDto): void{
    this.restService.insertRestaurant(data).subscribe(res =>{
      this.dialogRef.close();
      location.reload();
    })
  }

  onDelete(id:number){
    this.restService.deleteRestaurant(id).subscribe(res=>{
      location.reload();
    })
  }

}
