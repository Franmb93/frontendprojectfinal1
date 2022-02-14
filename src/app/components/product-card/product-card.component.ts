import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

	@Input() product!: Product;

	@Input() item: any;
	@Output() featuredEvent = new EventEmitter();

	
	public url: string = "http://localhost:8080/files"
	public image!: string;

	public sold: boolean = false;
	
	constructor() {

	}
	
	ngOnInit(): void {
		if(this.product.image != undefined){
			this.image = `${this.url}/${this.product.image}`;
		}
		
		if (this.product.deal) {
			this.sold = true;
		}
	}

	

}
