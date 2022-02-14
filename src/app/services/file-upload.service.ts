import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {

    private url = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    upload(file: File): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        const req = new HttpRequest('POST', `${this.url}/upload`, formData, {
          reportProgress: true,
          responseType: 'json'
        });
        return this.http.request(req);
      }
      getFiles(): Observable<any> {
        return this.http.get(`${this.url}/files`);
      }

      getFileByName(name: any): Observable<any> {
        return this.http.get(`${this.url}/files/${name}`);
      }
}
