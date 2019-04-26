import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-restaurants-create',
  templateUrl: './restaurants-create.component.html',
  styleUrls: ['./restaurants-create.component.scss']
})
export class RestaurantsCreateComponent implements OnInit {

  constructor(
    private dialogRef:MatDialogRef<RestaurantsCreateComponent>
  ) { }

  ngOnInit() {
  }

  closeEditForm(){
    this.dialogRef.close();
  }
}
