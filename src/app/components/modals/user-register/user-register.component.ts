import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
	selector: 'app-user-register',
	templateUrl: './user-register.component.html',
	styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
	
	@Input() user!: User;
	
	constructor() {
		
	}
	
	ngOnInit(): void {
	
	}

	onSubmit({value: formData}: NgForm): void {
		console.log(formData);
		
	}
	
}
