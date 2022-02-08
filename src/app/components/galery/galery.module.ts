import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleryRoutingModule } from './galery-routing.module';
import { GaleryComponent } from './galery.component';


@NgModule({
  declarations: [
    GaleryComponent
  ],
  imports: [
    CommonModule,
    GaleryRoutingModule
  ]
})
export class GaleryModule { }
