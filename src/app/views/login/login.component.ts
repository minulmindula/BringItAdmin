import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  private returnUrl: string;
  public userName: string;
  public password: string;

  constructor(private authService: AuthService, private router: Router,
    private activated: ActivatedRoute) { }

  ngOnInit() {
    this.activated.queryParams.subscribe(params => {
      this.returnUrl = params["returnUrl"];
    });
    // const username = "admin";
    // const password = "123qwe"
    // this.authService.authenticate(username, password).subscribe(() => {
    //   const url = this.returnUrl || '/';
    //   this.router.navigate([url]);
    // }, (error) => {

    // });
  }

  onSubmit() {
    console.log("blah blah");
    this.authService.authenticate(this.userName, this.password).subscribe(() => {
      const url = this.returnUrl || '/';
      this.router.navigate([url]);
    }, (error) => {
       Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Please enter valid username or password',
    })
    });
  }
}
