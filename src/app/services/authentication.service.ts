import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sesion } from '../interfaces/sesion';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	private url = environment.apiURL + "sesions/";
	private sesion!: Sesion;
	private loggedOk!: Boolean;

	constructor(private http: HttpClient) { }

	authenticate(username: string, password: string):Observable<boolean> {
		const headers = { 'content-type': 'application/json'}
		this.sesion = {username, password};
		const sesionJson = JSON.stringify(this.sesion);

		return this.http.post<any>(this.url, sesionJson, {'headers': headers} ).pipe(
			map(response => {
				if (response) {
          console.log(response.username)
					localStorage.setItem('currentUser', response.username);
          localStorage.setItem('currentSesionId', response.id);
          localStorage.setItem('currentUserId', response.user_id)
          this.loggedOk = true;
					return true;
				} else {
          this.loggedOk = false;
					return false;
				}
			}
			)
			);
		}

    getUserByUsername(username: String){
      this.http.get<any>(`${this.url}`)
    }

		isUserLoggedIn() {
			let user = localStorage.getItem('currentUser')
			return !(user === null)
		}

    getLoggedOk(): Boolean{
      return this.loggedOk;
    }


	logOut() {
		this.http.delete<any>(`${this.url}${localStorage.getItem('currentSesionId')}`).subscribe();
		localStorage.removeItem('currentUser');
      	localStorage.removeItem('currentSesionId');
      	localStorage.removeItem('currentUserId');
		}
	}
