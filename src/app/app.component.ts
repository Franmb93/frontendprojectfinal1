import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductEditComponent } from './modules/product-edit/product-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontendprojectfinal';
  constructor (
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductEditComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log("res", res)
    })
  }
}
