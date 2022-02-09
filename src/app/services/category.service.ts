import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	
	private url = environment.apiURL + "categories";
	constructor(private http: HttpClient) { }
	
	getCategories(): Observable<any> {
		return this.http.get<any>(this.url);
	}
	
	getCategory(id: any): Observable<any>{		
		return this.http.get<any>(`${this.url}/${id}`);
	}
}
