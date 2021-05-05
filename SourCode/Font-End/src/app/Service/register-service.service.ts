import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  api_url = 'http://localhost:8000/api';

  constructor(private http: HttpClient,
              private authService: AuthService
    ) { }

  getUserInfo(data: any): Observable<any> {


    return this.http.get<any>(this.api_url + '/provider/list', data);
  }

  registerUserService(data: any): Observable<any> {

    return this.http.post<any>(this.api_url + '/provider/create', data , this.authService.getHeader());

  }

}
