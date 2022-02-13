import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';
import { MaterialModule } from 'src/app/material/material.module';
import { UserRegisterComponent } from 'src/app/components/modals/user-register/user-register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		UserEditComponent,
		UserRegisterComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		UserEditRoutingModule
	],
	exports: [
		UserRegisterComponent
	]
})
export class UserEditModule { }
