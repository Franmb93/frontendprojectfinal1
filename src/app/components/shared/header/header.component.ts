import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../modals/login/login.component';
import { ProductRegisterComponent } from '../../modals/product-register/product-register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

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
}
