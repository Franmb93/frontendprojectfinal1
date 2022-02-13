import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
	
	public user!: User;
	public id!: number;

	constructor(
		private userService: UserService,
		private route: ActivatedRoute) {
		this.route.params.subscribe(
			params => {
				this.id = +params['id'];
				this.getUser(this.id);
			}
		);
	}
	
	ngOnInit(): void {
	}
	
	getUser(id: number) {		
		this.userService.getUser(id).subscribe(
			data => {
				this.user = data;
			}
		);
	}
}
