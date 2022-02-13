import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
	
	public id!: number;
	public product!: Product;
	public image!: string;
	public valoration!: number;	
	
	constructor(
		private service: ProductService,
		private authService: AuthenticationService,
		private categoryService: CategoryService,
		private route: ActivatedRoute) {
			
		this.route.params.subscribe(
			params => {
				this.id = +params['id'];			
				this.getProduct(this.id);
			}
		);
	}
			
	ngOnInit(): void {
		
	};
			
	getProduct(id: number) {
		this.service.getProduct(id).subscribe(
			data => {
				this.product = data;
				
				console.log(data);
				
				this.image = `${environment.apiURL}resources/images/${this.product.image}`;
				this.valoration = this.product.user.valoration * 20;
			}
		);
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
		if(this.product.user.username === localStorage.getItem('currentUser')){
		  return true;
		} else { return false; }
	  }

	  isUserLogged() : Boolean {
		if(localStorage.getItem('currentUser')){
		  return true;
		} else { return false;}
	  }
}
			