import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, pipe, switchMap, tap, timeout } from 'rxjs';
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

	@Output() newItemEvent = new EventEmitter<any>();

	public id!: number;
	public category!: number;
	public selectedOption!: number;

	
	image!: string;
	categories: Category[] = [];
	selectedFiles?: FileList;
	currentFile?: File;
	progress = 0;
	message = '';
	fileInfos?: Observable<any>;
	fileName?: String;

	// /Hacer llamada con id al producto para que se rellene el formulario
	product: any = {};
	

	constructor(
		private service: ProductService,
		private categoryService: CategoryService,
		private router: Router,
		private uploadService: FileUploadService,
		public dialogRef: MatDialogRef<ProductEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
	) { }
		
	ngOnInit(): void {
		this.getCategories();
		this.getProduct(this.data)
	}

	

	private getCurrentDate(): string {
		return new Date().toLocaleDateString();
	}

	

	selectFile(event: any): void {
		this.selectedFiles = event.target.files;
	}

	// upload(): void {
	// 	this.progress = 0;
	// 	if (this.selectedFiles) {
	// 		const file: File | null = this.selectedFiles.item(0);
	// 		if (file) {
	// 			this.currentFile = file;
	// 			this.uploadService.upload(this.currentFile).subscribe({
	// 				next: (event: any) => {
	// 					if (event.type === HttpEventType.UploadProgress) {
	// 						this.progress = Math.round(100 * event.loaded / event.total);
	// 						this.fileName = this.currentFile?.name;

	// 					} else if (event instanceof HttpResponse) {
	// 						this.message = event.body.message;
	// 						// this.fileInfos = this.uploadService.getFiles();
	// 					}
	// 				},
	// 				error: (err: any) => {
	// 					console.log(err);
	// 					this.progress = 0;
	// 					if (err.error && err.error.message) {
	// 						this.message = err.error.message;
	// 					} else {
	// 						this.message = 'Could not upload the file!';
	// 					}
	// 					this.currentFile = undefined;
	// 				}
	// 			});
	// 		}
	// 		this.selectedFiles = undefined;
	// 	}
		
	// }


	onSubmit({ value: formData }: NgForm): void {
		
		let arrayImages: any[] = [];
		let url: any;
		this.uploadService.getFiles().pipe(
			tap(
				(files) => {
					arrayImages = files;
				for (let e of arrayImages) {
					if (e.name === this.fileName) {
						url = e.url.substr(-36)
					}
				}
				let price: number = +formData.price;
				let weight: number = +formData.weight;
				this.product = {
					...formData,
					price: price,
					weight: weight,
					image: url,
					// published_date: this.getCurrentDate(),
					// published_date: "2021-01-01",
					user: {id: localStorage.getItem('currentUserId')},
					category: { id: 1 },
				}
				console.log("el jason: ", JSON.stringify(this.product))

				this.service.updateProduct(this.product)
					.pipe(
						// 	tap( res => console.log("la orden", res)),

						//   switchMap(({id: orderId}) => {
						// 	const details = this.prepareDetails();
						// 	return this.dataService.saveDetailsOrder({details, orderId});
						//   }),
						//Necesitamos el modulo route

						//   delay(5000),
						//   tap( () => this.shoppingCartService.resetCart())
						// tap(() => this.router.navigate(['/home'])),

					).subscribe();
			})
		).subscribe();
		// this.router.navigate(['/home'])
		this.dialogRef.close();
	}

	//get una categoría o ya me la trae el producto
	getCategories() {
		this.categoryService.getCategories().subscribe(
			data => {
				this.categories = data._embedded.categoryList;
				console.log(this.categories);
			}
		)
	}


	getProduct(id: number) {
		this.service.getProduct(id).subscribe(
			productData => {
				this.product = productData;
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


