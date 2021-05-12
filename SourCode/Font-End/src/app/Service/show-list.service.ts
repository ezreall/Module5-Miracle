import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ShowListService {

  
  private api_Url = 'http://localhost:8000/api/';

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  showlist(): Observable<any>{
    return this.http.get(this.api_Url + 'profiles');
  }
  profileDetail(id:number): Observable<any>{
    return this.http.get(this.api_Url + 'profile/'+id);
  }

  getProfile():Observable<any> {
    return this.http.get(this.api_Url+"list",this.authService.getHeader());
  }

  rentTime():Observable<any> {
    return this.http.get(this.api_Url+"requests/sort");
  }
  showService():Observable<any>{
    return this.http.get(this.api_Url+"demo")
  }
}
