import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
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
	public category!:  number;
  public selectedOption!: number;
	public valoration!: number;

	user = true;
	products: Product[] = [];
	image!: File;
  categories: Category[] = [];

	model: any = {
		name: "",
		description: "",
		price: "",
		weight: "",
		image: ""
	}
	product: any = {}
	// product: any = {
	// 	name: "Adidas",
	// 	description: "Zapatillas",
	// 	price: "13",
	// 	weight: "2",
	// }

	constructor(
		private service: ProductService,
		private categoryService: CategoryService,
		private router: Router,
		private uploadService: FileUploadService
	) { }

	ngOnInit(): void {
    this.getCategories();
	}

	onFilechange(event: any) {
		console.log(event.target.files[0])
		this.image = event.target.files[0]
	}

	private getCurrentDate(): string {
		return new Date().toLocaleDateString();
	}

	onSubmit({ value: formData }: NgForm): void {
		console.log("formData", formData)
		let price: number = +formData.price;
		let weight: number = +formData.weight;
		this.product = {
			...formData,
			price: price,
			weight: weight,
			file: this.image,
			// published_date: this.getCurrentDate(),
			// published_date: "2021-01-01",
			user: {id: localStorage.getItem('currentUserId')},
			category: {id: this.category},
		}
		console.log("product", this.product)
		console.log("el jason: ",JSON.stringify(this.product))

		this.service.saveProduct(this.product)
		.pipe(
		// 	tap( res => console.log("la orden", res)),

		//   switchMap(({id: orderId}) => {
		// 	const details = this.prepareDetails();
		// 	return this.dataService.saveDetailsOrder({details, orderId});
		//   }),
		//Necesitamos el modulo route

		//   delay(5000),
		//   tap( () => this.shoppingCartService.resetCart())
		tap(() => this.router.navigate(['/home'])),

		).subscribe();
	}

  getCategories(){
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data._embedded.categoryList;
        console.log(this.categories);
      }
    )
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


