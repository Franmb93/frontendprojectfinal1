import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { UserCardComponent } from 'src/app/components/user-card/user-card.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    GalleryComponent,
    ProductCardComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    GalleryRoutingModule
  ],
  exports: [
    ProductCardComponent,
    UserCardComponent
  ]
})
export class GalleryModule { }
