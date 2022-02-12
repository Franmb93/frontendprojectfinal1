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

	
	
	public image!: string;
	
	constructor() {

	}
	
	ngOnInit(): void {
		if(this.product.image != undefined){
			this.image = `${environment.apiURL}resources/images/${this.product.image}`;
		}
	}

	openFeatured() {
		this.featuredEvent.emit(this.item)
	}

}
