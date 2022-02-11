import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
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
	public category!: Category;
	public image!: string;
	public valoration!: number;

	products: Product[] = [];

	myObserver = {
		next: (x: Product[]) => console.log('Observer got a next value: ', x),
		error: (err: Error) => console.error('Observer got an error: ' + err),
		complete: () => console.log('Observer got a complete notification'),
	};
	
	constructor(
	  private service: ProductService,
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
				this.getCategory(this.product.category);

				console.log(data);
					
				this.image = `${environment.apiURL}resources/images/${this.product.image}`;

				console.log(this.product.user.valoration);
				
				this.valoration = this.product.user.valoration * 20;

				console.log(this.valoration);
				
			}
		);
	}

	getCategory(id: number) {
		this.categoryService.getCategory(id).subscribe(
			data => {
				this.category = data;
				console.log(data);
			}
		);
	}

}
