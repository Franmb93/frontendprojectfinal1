import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	
	private url = environment.apiURL + "products";
	constructor(private http: HttpClient, private router: Router) {  }
	
	getProducts(): Observable<any>{	  
		return this.http.get<any>(this.url);
	}
	
	getProduct(id: any): Observable<any>{		
		return this.http.get<any>(`${this.url}/${id}`);
	}

	saveProduct(product: Product): Observable<Product> {
		return this.http.post<Product>(`${this.url}`, product);
	}
	
}
