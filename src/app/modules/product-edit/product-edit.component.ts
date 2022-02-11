import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {


  products = [
    {name: "hdmi", description: "un cable"},
    {name: "impresora", description: "un cable"},
    {name: "Docking Station", description: "Un dock pa conectar toda cosa chico"},
  ]

  product = {name: "Franco", description: "un cable"}


  constructor(
    public dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit({value: formData}: NgForm): void {
    console.log("holi", formData)
  }

  handleFileUpload() {
    console.log("image")
  }

}


