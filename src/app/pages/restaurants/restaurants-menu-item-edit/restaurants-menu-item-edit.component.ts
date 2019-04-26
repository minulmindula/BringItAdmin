import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-restaurants-menu-item-edit',
  templateUrl: './restaurants-menu-item-edit.component.html',
  styleUrls: ['./restaurants-menu-item-edit.component.scss']
})
export class RestaurantsMenuItemEditComponent implements OnInit {

  constructor(
    private dialogRef:MatDialogRef<RestaurantsMenuItemEditComponent>
  ) { }

  ngOnInit() {
  }

  closeEditForm(){
    this.dialogRef.close();
  }
}
