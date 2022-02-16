import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-product-register',
    templateUrl: './product-register.component.html',
    styleUrls: ['./product-register.component.scss']
})
export class ProductRegisterComponent implements OnInit {

    @Input() dataParam: any;
	@Output() newItemEvent = new EventEmitter<any>();

	public id!: number;
	public category!: number;
	public selectedOption!: number;
	public valoration!: number;

    

	user = true;
	products: Product[] = [];
	image!: string;
	categories: Category[] = [];
	selectedFiles?: FileList;
	currentFile?: File;
	progress = 0;
	message = '';
	fileInfos?: Observable<any>;
	fileName?: String;

	model: any = {
		name: "",
		description: "",
		price: "",
		weight: "",
	}
	product: any = {};

    constructor(
        private service: ProductService,
		private categoryService: CategoryService,
		private router: Router,
		private uploadService: FileUploadService,

        public dialogRef: MatDialogRef<ProductRegisterComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    ngOnInit(): void {
		this.getCategories();
    }


	private getCurrentDate(): string {
		return new Date().toLocaleDateString();
	}

	getProduct() {
		if (this.dataParam.flag){
			console.log("true")
		}else {
			console.log("false")
		}
	}

	selectFile(event: any): void {
		this.selectedFiles = event.target.files;
	}

	upload(): void {
		this.progress = 0;
		if (this.selectedFiles) {
			const file: File | null = this.selectedFiles.item(0);
			if (file) {
				this.currentFile = file;
				this.uploadService.upload(this.currentFile).subscribe({
					next: (event: any) => {
						if (event.type === HttpEventType.UploadProgress) {
							this.progress = Math.round(100 * event.loaded / event.total);
							this.fileName = this.currentFile?.name;
						} else if (event instanceof HttpResponse) {
							this.message = event.body.message;
						}
					},
					error: (err: any) => {
						console.log(err);
						this.progress = 0;
						if (err.error && err.error.message) {
							this.message = err.error.message;
						} else {
							this.message = 'Could not upload the file!';
						}
						this.currentFile = undefined;
					}
				});
			}
			this.selectedFiles = undefined;
		}
		
	}


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
					user: {id: localStorage.getItem('currentUserId')},
					category: { id: 1 },
				}
				console.log("el jason: ", JSON.stringify(this.product))

				this.service.saveProduct(this.product).pipe().subscribe();
			})
		).subscribe();
		this.router.navigate(['/home'])
        this.dialogRef.close();
	}

	getCategories() {
		this.categoryService.getCategories().subscribe(
			data => {
				this.categories = data._embedded.categoryList;
				console.log(this.categories);
			}
		)
	}

	closeSelf(): void {
		this.dialogRef.close();
	}

}



  