import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
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
	private urele = "http://localhost:8010/proxy/api/products"
	constructor(private http: HttpClient, private router: Router) {  }

	getProducts(): Observable<any>{
		return this.http.get<any>(this.url);
	}

	getProduct(id: any): Observable<any>{
		return this.http.get<any>(`${this.url}/${id}`);
	}

	saveProduct(product: any): Observable<any> {
		// const headers = {
		// 	'content-type': 'multipart/form-data;',
			// "Access-Control-Allow-Origin": 'http://localhost:8080/api/products',
			// 'Access-Control-Request-Method': 'POST'

			// 'content-type': 'multipart/form-data;',
		// }
		// 'content-type': 'multipart/form-data; boundary=l3iPy71otz',

		const headers = new HttpHeaders({
      Authorization: 'Bearer ' + sessionStorage.getItem("authToken")
    });
    headers.set('Content-Type', 'multipart/form-data');

		const json = JSON.stringify(product)

		return this.http.post<any>(this.url, product, {headers: headers});
	}

}
