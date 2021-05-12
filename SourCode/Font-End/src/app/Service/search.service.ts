import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private api_Url = 'http://localhost:8000/api';

  constructor(
    private http:HttpClient
  ) { }

  search(data:any): Observable<any> {
    return this.http.post<any>(this.api_Url + '/search',data)
  }
  searchName(name:any):Observable<any>{
    return this.http.post<any>(this.api_Url + '/searchName',name)

  }
}
