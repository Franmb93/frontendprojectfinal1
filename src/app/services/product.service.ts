import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] = [];

  private url = "http://localhost:8080/api/products";
  constructor(private http: HttpClient) {  }

  getProducts(): Observable<any>{
    return this.http.get<Product[]>(this.url);
  }

}
