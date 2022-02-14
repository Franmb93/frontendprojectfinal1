import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/interfaces/product';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-purchase',
	templateUrl: './purchase.component.html',
	styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

	public product!: Product;
	public owner!: User;
	public self!: User;

	constructor(private service: UserService, public dialogRef: MatDialogRef<PurchaseComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
	
	ngOnInit(): void {
		this.product = this.data['product'];
		this.owner = this.data['owner'];

		this.service.getUser(localStorage.getItem('currentUserId')).subscribe(
			data => {
				this.self = data;
			}
		);
	}
	
	closeSelf(): void {
		this.dialogRef.close();
	}

	purchase(): void {
		this.updateWallets();
		this.postDeal();
	}

	updateWallets(): void {

	}

	postDeal(): void {

	}
	
}
