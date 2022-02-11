import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
	
	
	products: Product[] = [];
	
	constructor(
		private route: ActivatedRoute,
		private categoryService: CategoryService,
		private productService: ProductService) {
			
			this.route.data.subscribe(
				data => {

					console.log(data['type']);

					switch (data['type']) {
						case 'results':
							this.getProducts();
							break;
						case 'category':
							this.getProductsByCategory(data["category"]);
							break;
						case 'user':
							this.route.params.subscribe(
								params => {
									console.log(params);
								}
							);
							break;
						default:
							this.getProducts();
							break;
					}
					
				}
			);
			
	}
			
	ngOnInit(): void {
		
	}
	
	getProductsByCategory(category: string) {
		// this.categoryService.getCategory
	}
	
	getProducts() {
		this.productService.getProducts().subscribe(
			(response) => {
				this.products = response._embedded.productList;
			});
	}
		
}
			