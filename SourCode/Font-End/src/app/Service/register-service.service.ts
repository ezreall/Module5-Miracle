import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  constructor(private http: HttpClient,
              private authService: AuthService
    ) { }


  getService(): Observable<any> {
    return this.http.get<any>(environment.url_api + '/services', this.authService.getHeader());
  }

  getProvider(): Observable<any> {
    return this.http.get<any>(environment.url_api + '/providers', this.authService.getHeader());
  }

  updateService(data:any,id:any):Observable<any> {
    return this.http.put<any>(environment.url_api + id +  '/services/update',data,this.authService.getHeader());
  }

  registerService(data:any):Observable<any>{
    return this.http.post<any>(environment.url_api + '/services/store',data,this.authService.getHeader());
  }

  getIdProvider(id:any):Observable<any>{
    return this.http.get<any>(environment.url_api + '/services/'+id ,this.authService.getHeader());
  }

  registerUser(data: any): Observable<any> {    
    // console.log(data);
    return this.http.post<any>(environment.url_api + '/providers/store', data, this.authService.getHeader());
  }

}
