import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  status_id! :number;
  canChange:Boolean = true;
  constructor(private requestService: RequestService,
     private routerActive: ActivatedRoute,
     private authService: AuthService,
     private toast: ToastrService
    ) { }


    ngOnInit(): void {
      this.getMyOrder()
      
    }
    getMyOrder()
    {
      this.requestService.getMyOrder().subscribe(
        (res)=>{
          this.myRequests = res;
          console.log(this.myRequests[0])
        
        }
      )
    }

    accept(id:number) {
      this.status_id = 2;
      this.requestService.updateRequestStatus(id,this.status_id).subscribe(
        (res)=>{
          console.log(res);
          this.toast.success("Bạn đã chấp nhận yêu cầu thuê người yêu.Chúc bạn có những trải nghiệm vui vẻ")
          this.canChange = false;
          this.getMyOrder();
        }
      )
    }
    reject(id:number) {
      this.status_id = 3;
      this.requestService.updateRequestStatus(id,this.status_id).subscribe(
        (res)=>{
          console.log(res);
          this.toast.warning("Bạn đã từ chối yêu cầu thuê người yêu.Thật tiếc, hẹn bạn dịp sau")
          this.canChange = false; 
          this.getMyOrder();
        }
      )
      
    }
    
}
