import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deal } from '../interfaces/deal';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  private url = "http://localhost:8080/api/deal";
  constructor(private http: HttpClient) { }

  getDeal(): Observable<Deal[]> {
    return this.http.get<Deal[]>(this.url);
  }
}
