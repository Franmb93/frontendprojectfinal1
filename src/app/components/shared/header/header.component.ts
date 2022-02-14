import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserEditComponent } from 'src/app/modules/user-edit/user-edit.component';
import { LoginComponent } from '../../modals/login/login.component';
import { ProductRegisterComponent } from '../../modals/product-register/product-register.component';
import { UserRegisterComponent } from '../../modals/user-register/user-register.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	
	username: String = "";
	
	constructor(
		private loginservice: AuthenticationService,
		public dialog: MatDialog) {}
		
	ngOnInit(): void {}
	
	openDialog(type: number): void {
		let dialogRef;
		
		switch (type) {
			case 0:
			dialogRef = this.dialog.open(LoginComponent, {});
			break;
			
			case 1:
			dialogRef = this.dialog.open(UserRegisterComponent, {});
			break;
			
			default:
			break;
		}
	}
	
	openDialog2(): void {
		const dialogRef = this.dialog.open(ProductRegisterComponent, {});
		dialogRef.afterClosed().subscribe(res => {
			console.log("res", res)
		})
	}
	
	logOut() {
		this.loginservice.logOut();
	}
	
	loggedOk(){
		if(localStorage.getItem('currentUserId')){
			this.username != localStorage.getItem('currentUser');
			return true;
		}
		else{
			return false;
		}
	}
	
}