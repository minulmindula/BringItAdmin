import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog  } from '@angular/material';
import { UsersEditComponent } from './users-edit/users-edit.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data = [
    {
      "name": "Namal Wijerathne",
      "id": "1",
      "email": "Namal@gmail.com",
      "date": "2016/07/15"
    },
    {
      "name": "Jayampath Rathnayeka",
      "id": "2",
      "email": "Jaya123@yahoo.com",
      "date": "2019/02/20"
    },
    {
      "name": "Sunil Edirisinghe",
      "id": "3",
      "email": "sunil@yahoo.com",
      "date": "2019/03/25"
    },
    {
      "name": "Thilanka Rathnayeka",
      "id": "4",
      "email": "Thila@gmail.com",
      "date": "2019/07/14"
    },
    {
      "name": "Sangeeth Wijewardana",
      "id": "5",
      "email": "wije@hhotmail.com",
      "date": "2019/12/16"
    }
  ]

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  delete(id)
  {
    alert(id);
  }

  edit(){
    const dialogRef = this.dialog.open(UsersEditComponent,{
      width: '800px',
      data: {}
    });
  }

  openUserView(id){
    alert(id);
  }

  onCancel(){

  }

}
