import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UserRegisterComponent } from 'src/app/components/modals/user-register/user-register.component';
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
		private service: UserService,
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
		this.service.getUser(id).subscribe(
			data => {
				this.user = data;
				// this.openDialog();
			}
		);
	}

	putUser(formData: NgForm): void {
		const data = formData.form.value;

		this.service.putUser(data['id'], data).subscribe();
	}

	// openDialog(): void {
	// 	const dialogRef = this.dialog.open(UserRegisterComponent, {});
	// }

}
