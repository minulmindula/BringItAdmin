import { MatDialogRef, MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { RestaurantsMenuItemEditComponent } from '../restaurants-menu-item-edit/restaurants-menu-item-edit.component';
import { RestaurantsMenuItemCreateComponent } from '../restaurants-menu-item-create/restaurants-menu-item-create.component';
import { RestaurantService, MenuOutputDto } from '../../../shared-services/restaurant-service.component';

@Component({
  selector: 'app-restaurants-menu',
  templateUrl: './restaurants-menu.component.html',
  styleUrls: ['./restaurants-menu.component.scss']
})
export class RestaurantsMenuComponent implements OnInit {

  menu:MenuOutputDto;

  constructor(
    private dialogRef:MatDialogRef<RestaurantsMenuComponent>,
    private dialog:MatDialog,
    private resService:RestaurantService
  ) { }

  data = [
    {
      "Type": "",
      "DisplayName": "",
      "Price": ""
    }]

  ngOnInit() {
    this.resService.getByRestaurantId(1).subscribe(res=>{
      this.menu = res;
    })
  }
  editMenuItem(){
    this.dialog.open(RestaurantsMenuItemEditComponent,{
      width: '500px',
      data: {}
    });
  }

  createMenuItem(){
    this.dialog.open(RestaurantsMenuItemCreateComponent,{
      width: '500px',
      data: {}
    });
  }

  closeEditForm(){
    this.dialogRef.close();
  }
}
