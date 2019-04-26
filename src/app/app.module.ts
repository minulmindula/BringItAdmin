import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorModule, MatTableModule, MatDialogModule, MatSelectModule  } from '@angular/material';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { UsersComponent } from './pages/users/users.component';
import { UsersEditComponent } from './pages/users/users-edit/users-edit.component';
import { RidersComponent } from './pages/riders/riders.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
<<<<<<< Updated upstream
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './auth-interceptor';
import { RestaurantService } from './shared-services/restaurant-service.component';
=======
import { RestaurantsEditComponent } from './pages/restaurants/restaurants-edit/restaurants-edit.component';
import { RestaurantsMenuComponent } from './pages/restaurants/restaurants-menu/restaurants-menu.component';
import { RestaurantsCreateComponent } from './pages/restaurants/restaurants-create/restaurants-create.component';
import { RestaurantsMenuItemCreateComponent } from './pages/restaurants/restaurants-menu-item-create/restaurants-menu-item-create.component';
import { RestaurantsMenuItemEditComponent } from './pages/restaurants/restaurants-menu-item-edit/restaurants-menu-item-edit.component';
>>>>>>> Stashed changes

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    MatPaginatorModule,
<<<<<<< Updated upstream
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token')
      }
    })
=======
    MatDialogModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
>>>>>>> Stashed changes
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UsersEditComponent,
    RidersComponent,
    RestaurantsComponent,
<<<<<<< Updated upstream
    AuthComponent,
=======
    RestaurantsEditComponent,
    RestaurantsMenuComponent,
    RestaurantsCreateComponent,
    RestaurantsMenuItemCreateComponent,
    RestaurantsMenuItemEditComponent,
>>>>>>> Stashed changes
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
<<<<<<< Updated upstream
  },{
    provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  },
  RestaurantService
],
  bootstrap: [ AppComponent ]
=======
  }],
  bootstrap: [ AppComponent ],
  entryComponents: [ UsersEditComponent, RestaurantsEditComponent, RestaurantsCreateComponent, RestaurantsMenuComponent, RestaurantsMenuItemCreateComponent,
    RestaurantsMenuItemEditComponent]
>>>>>>> Stashed changes
})
export class AppModule { }
