import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ProviderService } from './provider.service';



@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private api_Url = 'http://127.0.0.1:8000/api';

  constructor(private http:HttpClient,
    private autheService:AuthService,
    private provider: ProviderService
    ) { }

    createRequest(data: object):Observable<any>
    {
      // let provider = this.provider.getProvider(id);
      return this.http.post(`${this.api_Url}`+'/requests/create', data, this.autheService.getHeader());
    }

    getMyRequest():Observable<any> {
      return this.http.get(this.api_Url+"/requests",this.autheService.getHeader());
    }

    getMyOrder():Observable<any> {
      return this.http.get(this.api_Url+"/requests/myorder",this.autheService.getHeader());
    }
    
    updateRequestStatus(id:number,status_id:number):Observable<any>
    {
      console.log(id)
      console.log(status_id)
      return this.http.post(this.api_Url+"/requests/"+id+"/update",status_id,this.autheService.getHeader());
    }



}

