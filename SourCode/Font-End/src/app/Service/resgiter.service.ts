import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResgiterService {
  private api_Url = 'http://127.0.0.1:8000/api/signup';

  constructor(private http: HttpClient) { }

  register(user: Object): Observable<Object> {

    return this.http.post(`${this.api_Url}`, user);

  }
}
