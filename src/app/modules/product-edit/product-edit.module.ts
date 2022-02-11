import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductEditRoutingModule } from './product-edit-routing.module';
import { ProductEditComponent } from './product-edit.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductEditComponent,
    
  ],
  imports: [
    CommonModule,
    ProductEditRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ProductEditModule { }
