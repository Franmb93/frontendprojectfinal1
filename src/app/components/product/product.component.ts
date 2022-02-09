import { Component, OnInit } from '@angular/core';
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


	constructor(private service: ProductService) { }

	ngOnInit(): void {

		this.service.getProducts()
		.pipe(tap((data) => { this.products = data._embedded.productList }))
		.subscribe();

	};

}
