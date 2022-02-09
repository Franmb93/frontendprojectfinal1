import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class DealService {
	
	private url = environment.apiURL + "deals";
	constructor(private http: HttpClient) { }
	
	getDeals(): Observable<any> {
		return this.http.get<any>(this.url);
	}
	
	getDeal(id: any): Observable<any>{		
		return this.http.get<any>(`${this.url}/${id}`);
	}
}
