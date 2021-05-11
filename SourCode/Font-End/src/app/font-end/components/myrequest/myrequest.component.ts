import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { RequestService } from 'src/app/Service/font-end/request.service';
import { Request } from '../class/request';
import { DetailAccountComponent } from '../detail-account/detail-account.component';

@Component({
  selector: 'app-myrequest',
  templateUrl: './myrequest.component.html',
  styleUrls: ['./myrequest.component.css']
})
export class MyrequestComponent implements OnInit {
  myRequests! : Request[];
  id!: number;
  status_id!:number;
  constructor(private requestService: RequestService,
     private routerActive: ActivatedRoute,
     private authService: AuthService
    ) { }


    ngOnInit(): void {
      this.getMyOrder()
      
    }
    getMyOrder()
    {
      this.requestService.getMyOrder().subscribe(
        (res)=>{
          this.myRequests = res;
          console.log(this.myRequests)
        }
      )
    }

    accept() {
      this.status_id = 2;
      this.requestService.updateRequestStatus(this.status_id).subscribe(
        (res)=>{
          console.log(res)
        }
      )
    }
    reject() {
      this.status_id = 3;
      this.requestService.updateRequestStatus(this.status_id).subscribe(
        (res)=>{
          this.myRequests = res;
          
        }
      )
      
    }

}
