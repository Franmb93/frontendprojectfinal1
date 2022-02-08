import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];


  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getProduct()
    .pipe(
      tap((products: Product[]) => { this.products = products} )
    ).subscribe();
  }

}
