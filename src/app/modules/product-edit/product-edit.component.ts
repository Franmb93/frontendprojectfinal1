import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
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
	public product!: Product;
	public category!: Category;
	public image!: string;
	public valoration!: number;

	products: Product[] = [];

  constructor(
    public dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private service: ProductService,
	  private categoryService: CategoryService,
	  private route: ActivatedRoute) {
		
		// this.route.params.subscribe(
		// 	params => {
		// 		this.id = +params['id'];
		// 		this.getProduct(this.id);
		// 	}
		// );
   }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit({value: formData}: NgForm): void {
    console.log("holi", formData)
  }

  handleFileUpload() {
    console.log("image")
  }

  getProduct(id: number) {
		this.service.getProduct(id).subscribe(
			data => {
				this.product = data;
				this.getCategory(this.product.category.id);

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


