import { MatDialogRef, MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { RestaurantsMenuItemEditComponent } from '../restaurants-menu-item-edit/restaurants-menu-item-edit.component';
import { RestaurantsMenuItemCreateComponent } from '../restaurants-menu-item-create/restaurants-menu-item-create.component';

@Component({
  selector: 'app-restaurants-menu',
  templateUrl: './restaurants-menu.component.html',
  styleUrls: ['./restaurants-menu.component.scss']
})
export class RestaurantsMenuComponent implements OnInit {

  constructor(
    private dialogRef:MatDialogRef<RestaurantsMenuComponent>,
    private dialog:MatDialog
  ) { }

  ngOnInit() {
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
