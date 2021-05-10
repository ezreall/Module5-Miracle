import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private detailAccountService: DetailAccountComponent
    
    ) { }

  ngOnInit(): void {
    this.getMyRequest()
    
  }
  getMyRequest()
  {
    this.id = +this.routerActive.snapshot.paramMap.get("id")!;
    this.requestService.getMyRequest(this.id).subscribe(
      (res)=>{
        this.myRequests = res;
        console.log(this.myRequests)
      }
    )
  }
  accept() {
    this.status_id = 2;
    this.id = +this.routerActive.snapshot.paramMap.get("id")!;
    this.requestService.updateRequestStatus(this.id).subscribe(
      (res)=>{
        console.log(res)
      }
    )
  }
  reject() {
    this.status_id = 3;
    this.id = +this.routerActive.snapshot.paramMap.get("id")!;
    this.requestService.updateRequestStatus(this.id).subscribe(
      (res)=>{
        this.myRequests = res;
        
      }
    )
    
  }

}
