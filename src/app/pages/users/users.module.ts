import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    FormsModule,
    UsersRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ UsersComponent ]
})
export class DashboardModule { }
