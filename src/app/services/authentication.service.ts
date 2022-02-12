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
          localStorage.setItem('currentUser', response.id)
          return true;
        } else {
          return false;
        }
      }
    )
    );
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('currentUser')
    return !(user === null)
  }

  logOut() {
    this.http.delete<any>(`${this.url}${localStorage.getItem('currentUser')}`).subscribe();
    localStorage.removeItem('currentUser');
  }
}
