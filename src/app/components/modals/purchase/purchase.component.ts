import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Deal } from 'src/app/interfaces/deal';
import { Product } from 'src/app/interfaces/product';
import { User } from 'src/app/interfaces/user';
import { DealService } from 'src/app/services/deal.service';
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

	constructor(private service: UserService, private dealService: DealService, public dialogRef: MatDialogRef<PurchaseComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
	
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
		this.self.wallet -= this.product.price;
		this.service.putUser(this.self.id, this.self).subscribe();

		this.owner.wallet += this.product.price;
		this.service.putUser(this.owner.id, this.owner).subscribe();
	}

	postDeal(): void {

		
		const deal = {
			price: this.product?.price,
			product: { id: this.product.id },
			user: { id: this.self.id }
		}

		console.log(deal);
		

		this.dealService.postDeal(deal).subscribe(
			response => {
				console.log(response);
				
			}
		);
	}
	
}
