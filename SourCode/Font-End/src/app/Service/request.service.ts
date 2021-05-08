import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private api_Url = 'http://127.0.0.1:8000/api';

  constructor(private http:HttpClient,
    private autheService:AuthService) { 
      
    }

    createRequest(data: object):Observable<any>
    {
      return this.http.post(`${this.api_Url}`+'/requests/create', data, this.autheService.getHeader());
    }


}

