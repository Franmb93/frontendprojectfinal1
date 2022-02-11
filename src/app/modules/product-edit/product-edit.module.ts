import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductEditRoutingModule } from './product-edit-routing.module';
import { ProductEditComponent } from './product-edit.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ProductEditComponent
  ],
  imports: [
    CommonModule,
	MaterialModule,
    ProductEditRoutingModule
  ]
})
export class ProductEditModule { }
