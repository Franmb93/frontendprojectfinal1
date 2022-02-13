import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
	selector: 'app-user-register',
	templateUrl: './user-register.component.html',
	styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
	
	@Input() user!: User;
	
	constructor() { }
	
	ngOnInit(): void {
	}
	
}
