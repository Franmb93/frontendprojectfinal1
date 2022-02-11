import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    UserEditComponent
  ],
  imports: [
    CommonModule,
	MaterialModule,
    UserEditRoutingModule
  ]
})
export class UserEditModule { }
