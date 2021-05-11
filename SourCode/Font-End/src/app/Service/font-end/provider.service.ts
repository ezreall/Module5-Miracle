import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private api_Url = 'http://127.0.0.1:8000/api';

  constructor(private http:HttpClient,
    private autheService:AuthService) { }

    getAllProvider():Observable<any>
    {
      return this.http.get(this.api_Url+"providers");
    }

    getProviderInfor(id:number):Observable<any>
    {
      return this.http.get(this.api_Url+"/providers/"+ id +"/"+"getinfor",this.autheService.getHeader());
    }

    getProvider(id:number):Observable<any>
    {
      return this.http.get(this.api_Url+"/providers/"+ id,this.autheService.getHeader());
    }
}
