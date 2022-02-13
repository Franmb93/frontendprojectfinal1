import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
	
	products: Product[] = [];

	isUserType: boolean = false;
	
	constructor(
		private route: ActivatedRoute,
		private categoryService: CategoryService,
		private userService: UserService,
		private productService: ProductService) {
			
			this.route.data.subscribe(
				data => {

					// console.log(data['type']);

					switch (data['type']) {
						case 'results':
							this.getProducts(); // TODO metodo que regrese resultados de la busqueda
							
							break;
						case 'category':
							this.getProductsByCategory(data["category"]);

							break;
						case 'user':
							this.isUserType = true;
							this.route.params.subscribe(
								params => {
									this.getProductsByUser(+params['id'])
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
	
	getProducts() {
		this.productService.getProducts().subscribe(
			(response) => {
				this.products = response._embedded.productList;
			});
	}

	getProductsByCategory(category: string) {
		// this.categoryService.getCategory
		switch (category) {
			case "ropa":
				this.categoryService.getCategory(3).subscribe(
					category => {
						this.products = category.products;
						// console.log(this.products);
					}
				)
				break;
			
			case "coches":
				this.categoryService.getCategory(1).subscribe(
					category => {
						this.products = category.products;
						// console.log(this.products);
					}
				)
				break;

			case "tecnologia":
				this.categoryService.getCategory(7).subscribe(
					category => {
						this.products = category.products;
						// console.log(this.products);
					}
				)
				break;
		
			default:
				break;
		}
	}

	getProductsByUser(id: number) {
		this.userService.getUser(id).subscribe(
			user => {
				this.products = user.products;
				// console.log(this.products);
			}
		)
	}
		
}
			