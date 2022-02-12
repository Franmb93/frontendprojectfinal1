import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductEditRoutingModule } from './product-edit-routing.module';
import { ProductEditComponent } from './product-edit.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { ProductRegisterComponent } from 'src/app/components/modals/product-register/product-register.component';


@NgModule({
	declarations: [
		ProductEditComponent,
		ProductRegisterComponent
	],
	imports: [
		CommonModule,
		ProductEditRoutingModule,
		MaterialModule,
		FormsModule
	],
	exports: [
		ProductRegisterComponent
	]
})
export class ProductEditModule { }
