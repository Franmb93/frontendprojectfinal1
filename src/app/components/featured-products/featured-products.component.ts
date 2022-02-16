import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {


  public id!: number;
	public product!: Product;
	public image!: string;

	products1: Product[] = [];
  products2: Product[] = [];

  constructor(
    private service: ProductService,
	  private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }


  getProducts() {
    let featuredProducts = []
		this.service.getProducts().subscribe(
			data => {
        // this.products = data._embedded.productList
        featuredProducts = data._embedded.productList;
        for (let i = 0; i<3; i ++) {
          this.products1.push(featuredProducts[i])
        }
        // for (let i = 3; i<6; i ++) {
        //   this.products2.push(featuredProducts[i])
        // }
        for (let i = 0; i<featuredProducts.length; i ++) {
          this.products2.push(featuredProducts[i]) 
        }
			}
		);
	}




}
