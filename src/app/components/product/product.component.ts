import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

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
				const id = params['id'];
				console.log(this.route);
				
			}
		);

		this.getProducts();
		
	}
	
	ngOnInit(): void {

	};

	getProducts() {
		this.service.getProducts().subscribe(
			data => {
				this.products = data._embedded.productList
				console.log(this.products);
				
			}
		);
	}

}	
