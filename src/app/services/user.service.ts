import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	
	private url = environment.apiURL + "users";
	constructor(private http: HttpClient) { }
	
	getUsers(): Observable<any>{
		return this.http.get<any>(this.url);
	}
	
	getUser(id: any): Observable<any>{		
		return this.http.get<any>(`${this.url}/${id}`);
	}
}
