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

	public total!: number;
	public rest!: number;


	constructor(private service: UserService, private dealService: DealService, public dialogRef: MatDialogRef<PurchaseComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
	
	ngOnInit(): void {
		this.product = this.data['product'];
		this.owner = this.data['owner'];

		this.service.getUser(localStorage.getItem('currentUserId')).subscribe(
			data => {
				this.self = data;
				this.total = this.product.price + this.priceShipping();
				this.rest = this.self.wallet - this.total;
			}
		);
	}
	
	closeSelf(): void {
		this.dialogRef.close();
	}

	purchase(): void {
		this.updateWallets();
	}

	priceShipping() {
		if (this.product.weight <= 2) {
			return 2.95;
		}
		else if (2 > this.product.weight && this.product.weight <= 5) {
			return 4.95;
		}
		else {
			return 7.95;
		}
	}

	updateWallets(): void {
		if ((this.self.wallet - this.product.price) > 0) {
			this.self.wallet -= this.total;
			this.service.putUser(this.self.id, this.self).subscribe();

			this.owner.wallet += this.product.price;
			this.service.putUser(this.owner.id, this.owner).subscribe();

			this.postDeal();
		}
	}

	postDeal(): void {
		const deal = {
			price: this.product?.price,
			product: { id: this.product.id },
			user: { id: this.self.id }
		}

		this.dealService.postDeal(deal).subscribe(
			response => {
				this.closeSelf();
			}
		);
	}
	
}
