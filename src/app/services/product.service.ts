import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:8080/api/products";
  constructor(private http: HttpClient) {  }

  getProduct(): Observable<any>{	  
    return this.http.get<any>(this.url);
  }
}
