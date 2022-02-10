import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserStoreRoutingModule } from './user-store-routing.module';
import { UserStoreComponent } from './user-store.component';
import { ProductCardComponent } from '../product/product-card/product-card.component';
import { ProductsComponent } from '../product/products/products.component';
import { ProductModule } from '../product/product.module';


@NgModule({
  declarations: [
    UserStoreComponent,

  ],
  imports: [
    CommonModule,
    UserStoreRoutingModule,
    ProductModule
  ]
})
export class UserStoreModule { }
