import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShowListService {

  
  private api_Url = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  showlist(): Observable<any>{
    return this.http.get(this.api_Url + 'profiles',);
  }
  profileDetail(id:number): Observable<any>{
    return this.http.get(this.api_Url + 'profile/'+id);
  }
}
