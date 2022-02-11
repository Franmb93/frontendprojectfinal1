import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

	// products : Product[] = [];

// 	products: Product[] = [];
  
//   constructor(
//     private service: ProductService
//     ) { }

//   ngOnInit(): void {
//     // this.service.getProduct()
// 		// .pipe(tap((data) => { this.products = data._embedded.productList
//     //    console.log(this.products) }))
// 		// .subscribe()

//     this.getProducts()
    
//   }


//   getProducts() {
//     this.service.getProducts().subscribe(

//       (response) => {
//         this.products = response._embedded.productList;
//       }
//     )
//   }
  

  


  constructor() { }

  ngOnInit(): void {
  }

}
