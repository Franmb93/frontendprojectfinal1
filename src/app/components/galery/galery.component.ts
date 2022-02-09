import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  // products = [
  //   {name: "hdmi", description: "un cable"},
  //   {name: "hdmi", description: "un cable"},
  //   {name: "hdmi", description: "un cable"},
  //   {name: "hdmi", description: "un cable"},
  //   {name: "hdmi", description: "un cable"},
  //   {name: "hdmi", description: "un cable"},
  //   {name: "hdmi", description: "un cable"},
  //   {name: "hdmi", description: "un cable"},
  //   {name: "hdmi", description: "un cable"},
  //   {name: "hdmi", description: "un cable"},
  // ]
  products: Product[] = [];
  
  constructor(
    private service: ProductService
    ) { }

  ngOnInit(): void {
    // this.service.getProduct()
		// .pipe(tap((data) => { this.products = data._embedded.productList
    //    console.log(this.products) }))
		// .subscribe()

    this.getProducts()
    
  }


  getProducts() {
    this.service.getProduct().subscribe(
      (response) => {
        this.products = response._embedded.productList;
      }
    )
  }
  

  

}
