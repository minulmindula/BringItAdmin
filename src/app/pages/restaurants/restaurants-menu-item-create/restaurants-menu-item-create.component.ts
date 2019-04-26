import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-restaurants-menu-item-create',
  templateUrl: './restaurants-menu-item-create.component.html',
  styleUrls: ['./restaurants-menu-item-create.component.scss']
})
export class RestaurantsMenuItemCreateComponent implements OnInit {

  constructor(
    private dialogRef:MatDialogRef<RestaurantsMenuItemCreateComponent>
  ) { }

  ngOnInit() {
  }

  closeEditForm(){
    this.dialogRef.close();
  }
}
