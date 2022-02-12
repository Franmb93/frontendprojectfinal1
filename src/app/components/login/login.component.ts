import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'franmb931'
  password = '12345623'
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {

   this.loginservice.authenticate(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
      }
    );

    // if (this.loginservice.authenticate(this.username, this.password)
    // ) {

    //   this.router.navigate([''])
    //   this.invalidLogin = false
    // } else{
    //   console.log("Entro error")
    //   this.invalidLogin = true
    // }

  }

  logOut(){
    this.loginservice.logOut();
  }
}
