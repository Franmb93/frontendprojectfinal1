import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsComponent } from './products/products.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductCardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
	  MaterialModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
