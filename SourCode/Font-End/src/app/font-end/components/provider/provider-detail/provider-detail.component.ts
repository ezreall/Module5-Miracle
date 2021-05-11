import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProviderService } from 'src/app/Service/font-end/provider.service';
import { Provider } from '../../class/provider';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css']
})
export class ProviderDetailComponent implements OnInit {

  isRent :boolean=false;
  profile! : Provider
  id!:number;
  constructor(private providerService:ProviderService,
    private routerActive: ActivatedRoute,
    private toast:ToastrService
    ) { }

  ngOnInit(): void {
    this.id = +this.routerActive.snapshot.paramMap.get("id")!;
    console.log(this.id)
    this.providerService.getProvider(this.id).subscribe(
      (res)=> {
        console.log(res);
        this.profile=res;
      },error=>console.log(error)
    )


  }
  click() {
    this.isRent = true;
  }
  close() {
    this.isRent = false;
  }

}
