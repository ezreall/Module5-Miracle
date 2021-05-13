import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProviderService } from 'src/app/Service/font-end/provider.service';
import { RequestService } from 'src/app/Service/font-end/request.service';
import { ShowListService } from 'src/app/Service/show-list.service';
import { environment } from 'src/environments/environment.prod';
import { Profile } from '../register-user/profile';





@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  image_path = environment.image_url;
  profile :Profile={};
  id!:number;
  constructor(
    private routerActive: ActivatedRoute,
    private toast:ToastrService,
    private providerService:ProviderService,
    private requestForm: RequestService,
    ) { }

  ngOnInit(): void {
    this.getDetail();
  }
  
  getDetail() {
    this.id = +this.routerActive.snapshot.paramMap.get("id")!;
    console.log(this.id)
    this.providerService.getProviderInfor(this.id).subscribe(
      (res)=> {
        console.log(res)
        this.profile=res[0];
        console.log(res)
      },error=>console.log(error)
    )

  }
}
