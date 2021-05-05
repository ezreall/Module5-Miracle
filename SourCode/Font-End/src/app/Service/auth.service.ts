import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




let headers_object = new HttpHeaders({

  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  'Authorization': "Bearer " + sessionStorage.getItem('token')
})
const httpOptions = {
  headers: headers_object
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {

    // console.log("Bearer " + sessionStorage.getItem('token'));

    return this.http.post<any>(this.api_url + '/login', data);
  }

  logout(): Observable<any> {
    console.log("Bearer " + sessionStorage.getItem('token'));
   
    return this.http.post(this.api_url + '/logout','', httpOptions);

  }
}
