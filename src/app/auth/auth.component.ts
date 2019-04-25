import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private returnUrl: string;
  constructor(private authService: AuthService, private router: Router,
    private activated: ActivatedRoute) { }

  ngOnInit() {
    this.activated.queryParams.subscribe(params => {
      this.returnUrl = params["returnUrl"];
    });
  }

  ngSubmit() {
    const username = "admin";
    const password = "123qwe"
    this.authService.authenticate(username, password).subscribe(() => {
      const url = this.returnUrl || '/';
      this.router.navigate([url]);
    }, (error) => {

    });
  }

}
