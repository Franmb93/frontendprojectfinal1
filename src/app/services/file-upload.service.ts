import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {

    private url = environment.apiURL;

    constructor(private http: HttpClient) { }

    public uploadfile(file: File) {
        let formParams = new FormData();
        formParams.append('file', file)
        return this.http.post('http://localhost:3000/uploadFile', formParams)
    }
}
