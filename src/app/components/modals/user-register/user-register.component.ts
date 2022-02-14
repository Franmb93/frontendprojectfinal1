import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-user-register',
	templateUrl: './user-register.component.html',
	styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
	
	form: any = {};

	constructor(
		private route: ActivatedRoute,
		private service: UserService,
		public dialogSelfRef: MatDialogRef<UserRegisterComponent>
		) {
		// Descomentar si se quiere probar el formulario sin tener q rellenarlo
		this.form = {
			username: 'ErenJaeger',
			password: '123456',
			first_name: 'Eren',
			last_name: 'Jaeger',
			email: 'erenjaeger@rumbling.eldia',
			phone: '111111111',
			shipping_address: 'Paradis Island, Wall Maria, Shiganshina District'
		}
		
	}
	
	ngOnInit(): void {
		
	}

	closeSelf(): void {
		this.dialogSelfRef.close();
	}

	postUser(formData: NgForm){
		const data = formData.form.value; 

		let user: User = {
			...data
		}
		
		this.service.postUser(user).subscribe(
			response => {
				this.closeSelf();
			}
		);
	}

}
