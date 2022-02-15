import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PurchaseComponent } from 'src/app/components/modals/purchase/purchase.component';
import { Product } from 'src/app/interfaces/product';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

	public id!: number;
	public product!: Product;
	public owner!: User;
	public image!: string;
	public valoration!: number;

	constructor(
		public dialog: MatDialog,
		private service: ProductService,
		private userService: UserService,
		private authService: AuthenticationService,
		private categoryService: CategoryService,
		private route: ActivatedRoute) {

			this.route.params.subscribe(
				params => {
					this.id = +params['id'];
					this.getProduct(this.id);
					this.getOwner(this.id);
				}
			);
	}

	ngOnInit(): void {

	};

	getProduct(id: number) {
		this.service.getProduct(id).subscribe(
			data => {
				this.product = data;
				this.image = `http://localhost:8080/files/${this.product.image}`;
			}
		);
	}

	getOwner(id: number) {
		this.userService.getOwner(id).subscribe(
			data => {
				this.owner = data;
				this.valoration = this.owner?.valoration * 20;
			}
		);
	}

	openPurchaseModal() {
		const dialogRef = this.dialog.open(PurchaseComponent, { data: { product: this.product, owner: this.owner } });
		dialogRef.afterClosed().subscribe(res => {
			console.log("res", res)
		})
	}

	priceShipping() {
		if (this.product.weight <= 2) {
			this.product.price = this.product.price + 2.95;
		}
		else if (2 > this.product.weight && this.product.weight <= 5) {
			this.product.price = this.product.price + 4.95;
		}
		else {
			this.product.price = this.product.price + 7.95;
		}
	}

	isEqualLoggedThanThisUser() : Boolean{
		if(this.owner?.username === localStorage.getItem('currentUser')){
			return true;
		} else { return false; }
	}

	isUserLogged() : Boolean {
		if(localStorage.getItem('currentUser')){
			return true;
		} else { return false;}
	}

}
