import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/Service/register-service.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  showService: Array<any> =[];
  constructor(private registerService: RegisterServiceService) { }

  ngOnInit(): void {
    this.getServiceInfo();
  }

  getServiceInfo(){
    this.registerService.getMyService().subscribe((res)=>{
      this.showService = res;
      console.log(res);
    });
  }

}
