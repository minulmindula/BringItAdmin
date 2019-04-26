import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UsersEditComponent>
  ) { }

  ngOnInit() {
  }

  closeEditForm(){
    this.dialogRef.close();
  }
}
