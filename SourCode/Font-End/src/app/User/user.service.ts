import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api_URL = "http://127.0.0.1:8000/api/auth";

  constructor(private http:HttpClient) { }
  getUser(id: number): Observable<object> {
    return this.http.get(`${this.api_URL}/${id}`);
  }
}
