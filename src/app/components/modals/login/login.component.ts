import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  validLogin = false;
  loginCount = 0;

  constructor(
    private router: Router,
    private loginservice: AuthenticationService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  checkLogin() {
    this.loginservice
      .authenticate(this.username, this.password)
      .subscribe((response) => (this.validLogin = response));
    return this.validLogin;
  }

  loggedOk(): boolean {
    if (this.validLogin) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.loginservice.logOut();
  }
}
