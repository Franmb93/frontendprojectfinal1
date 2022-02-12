import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-product-register',
    templateUrl: './product-register.component.html',
    styleUrls: ['./product-register.component.scss']
})
export class ProductRegisterComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<ProductRegisterComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    ngOnInit(): void {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }



}



  