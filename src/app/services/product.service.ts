import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:8080/api/products";
  constructor(private http: HttpClient) {  }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
}
