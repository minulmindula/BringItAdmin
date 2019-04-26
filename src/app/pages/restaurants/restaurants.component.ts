import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RestaurantsEditComponent } from './restaurants-edit/restaurants-edit.component';
import { RestaurantsCreateComponent } from './restaurants-create/restaurants-create.component';
import { RestaurantsMenuComponent } from './restaurants-menu/restaurants-menu.component';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openEdit(){
    this.dialog.open(RestaurantsEditComponent,{
      width: '500px',
      data: {}
    });

    //Meka delete karanda epa

    // Swal.fire({
    //   type: 'error',
    //   title: 'Oops...',
    //   text: 'Our servers are busy at the moment. Please try again later!',
    // })
  }

  viewMore(){
    this.dialog.open(RestaurantsMenuComponent,{
      width: '800px',
      data: {}
    });
  }

  createRestaurant(){
    this.dialog.open(RestaurantsCreateComponent,{
      width: '500px',
      data: {}
    });
  }
}
