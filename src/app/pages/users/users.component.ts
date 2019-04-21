import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator  } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  editFormIsHidden = false;

  data = [
    {
      "name": "hi",
      "id": "1"
    },
    {
      "name": "hello",
      "id": "2"
    },
    {
      "name": "hello",
      "id": "3"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  delete(id)
  {
    alert(id);
  }

  edit(id){
    this.editFormIsHidden = false;
    alert(id);
  }

  closeEditForm(){
    this.editFormIsHidden = true;
  }

  openUserView(id){
    alert(id);
  }

  onCancel(){
    
  }

}
