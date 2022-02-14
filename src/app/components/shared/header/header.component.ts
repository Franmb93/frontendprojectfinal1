import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoginComponent } from '../../modals/login/login.component';
import { ProductRegisterComponent } from '../../modals/product-register/product-register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  username: String = "";

  constructor(
    private loginservice: AuthenticationService,
    public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {});
    dialogRef.afterClosed().subscribe((res) => {
      console.log('res', res);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(ProductRegisterComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log("res", res)
    })
  }

  logOut() {
    this.loginservice.logOut();
  }

  loggedOk(){
    if(localStorage.getItem('currentUserId')){
      this.username != localStorage.getItem('currentUser');
      return true;
    }
    else{
      return false;
    }
  }
}
