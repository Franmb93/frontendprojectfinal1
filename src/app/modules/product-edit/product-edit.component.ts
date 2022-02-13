import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';


@Component({
	selector: 'app-product-edit',
	templateUrl: './product-edit.component.html',
	styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {


	public id!: number;
	// public product!: Product;
	// public product: Product = {
	// 	id: 0,
	// 	name: "",
	// 	description: "",
	// 	price: number,
	// 	weight: number,
	// 	image: string,
	// 	published_date: string,
	// 	user: User,
	// 	category: number,
	// 	deal: Deal,
	// };
	public category!: Category;
	public image!: string;
	public valoration!: number;

	user = true;
	products: Product[] = [];

	model = {
		name: "",
		description: "",
		price: "",
		weight: "",
	}
	product = {
		name: "Adidas",
		description: "Zapatillas",
		price: "13",
		weight: "2",
	}

	constructor(
		private service: ProductService,
		private categoryService: CategoryService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	private getCurrentDate(): string {
		return new Date().toLocaleDateString();
	}

	onSubmit({value: formData}: NgForm): void {
		console.log("formData", formData)
		let price: number = +formData.price;
		let weight: number = +formData.weight;
		this.product = {
		  ...formData,
		  price: price,
		  weight: weight,
		  published_date: this.getCurrentDate(),
		}
		console.log("product", this.product)

		// this.service.saveProduct(this.product)
		// .pipe(
		// 	tap( res => console.log("la orden", res)),

			//   switchMap(({id: orderId}) => {
			// 	const details = this.prepareDetails();
			// 	return this.dataService.saveDetailsOrder({details, orderId});
			//   }),
			//Necesitamos el modulo route

			// tap(() => this.router.navigate(['/home'])),
			//   delay(5000),
			//   tap( () => this.shoppingCartService.resetCart())

		// ).subscribe();
	  }

	handleFileUpload() {
		console.log("image")
	}

	// getProduct(id: number) {
	// 	this.service.getProduct(id).subscribe(
	// 		data => {
	// 			this.product = data;
	// 			this.getCategory(this.product.category);
	// 			console.log(data);
	// 			this.image = `${environment.apiURL}resources/images/${this.product.image}`;
	// 			console.log(this.product.user.valoration);
	// 			this.valoration = this.product.user.valoration * 20;
	// 			console.log(this.valoration);
	// 		}
	// 	);
	// }

	// getCategory(id: number) {
	// 	this.categoryService.getCategory(id).subscribe(
	// 		data => {
	// 			this.category = data;
	// 			console.log(data);
	// 		}
	// 	);
	// }

}


// export class CheckoutComponent implements OnInit {

//     model = {
//       name: "",
//       store: "",
//       shippingAddress: "",
//       city: ""
//     }
  
//     isDelivery: boolean = true;
  
//     stores: Store[] = [];
  
//     cart: Product[] = [];
  
//     constructor(
//       private dataService: DataService,
//       private productService: ProductService,
//       private router: Router,
//       private shoppingCartService: ShoppingCartService,
  
//       ) {
//         this.isCartEmpty();
//        }
  
//     ngOnInit(): void {
//       this.getStores();
//       this.getDataCart();
//       this.prepareDetails();
//     }
  
//     onPickupDelivery(value: boolean):void {
//       this.isDelivery = value;
//     }
  
//     private getStores(): void {
//       this.dataService.getStores().pipe(
//         tap((stores: Store[]) => this.stores = stores)
//       )
//         .subscribe(); 
//     }
  
    
  
//     private getCurrentDate(): string {
//       return new Date().toLocaleDateString();
//     }
  
//     private prepareDetails(): Details[] {
//       const details: Details[] = [];
//       this.cart.forEach((product: Product) => {
//         const { id: productId, name: productName, qty: quantity, stock } = product;
//         const updateStock = (stock - quantity);
//         //necesitamos actualizar el stock con metodo updateStock de productService
//         this.productService.updateStock(productId, updateStock)
//         .pipe(
//           tap(()=> details.push({productId, productName, quantity} ))
//         ).subscribe();
//       })
//       return details; 
//     }
  
//     private getDataCart(): void {
//       this.shoppingCartService.cartAction$
//         .pipe(
//           tap( (products: Product[]) => this.cart = products)
//         ).subscribe()
//     }
  
//     private isCartEmpty(): void {
//       this.shoppingCartService.cartAction$
//         .pipe(
//           tap((products: Product[]) => {
//             if (!products.length) {
//               this.router.navigate(['/products']);
//             }  
//           })
//         ).subscribe();
//     }
  
//   }