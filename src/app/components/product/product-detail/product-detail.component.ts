import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

	public id!: number;
	public product!: Product;
	public image!: string;

	products: Product[] = [];

	myObserver = {
		next: (x: Product[]) => console.log('Observer got a next value: ', x),
		error: (err: Error) => console.error('Observer got an error: ' + err),
		complete: () => console.log('Observer got a complete notification'),
	};
	
	constructor(
	  private service: ProductService,
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

	getProducts() {
		this.service.getProducts().subscribe(
			data => {
				this.products = data._embedded.productList;				
			}
		);
	}

	getProduct(id: number) {
		this.service.getProduct(id).subscribe(
			data => {
				this.product = data;
				console.log(data);
					
				this.image = `${environment.apiURL}resources/images/${this.product.image}`
			}
		);
	}

}
