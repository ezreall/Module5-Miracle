import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/font-end/components/class/profile';
import { ProviderService } from 'src/app/Service/font-end/provider.service';
import { ShowListService } from 'src/app/Service/show-list.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-detail-player',
  templateUrl: './detail-player.component.html',
  styleUrls: ['./detail-player.component.css']
})
export class DetailPlayerComponent implements OnInit {

  constructor(
    private listdetail:ShowListService,
    private routerActive:ActivatedRoute,
    private providerService: ProviderService
    
  ) { }
  isRent :boolean=false;
  id!:number;
  detailplayer!:any;
  profile :Profile={};
  image_path = environment.image_url;
  ngOnInit(): void {
    this.getDetail();
  }
  click() {
    this.isRent = true;
  }
  close() {
    this.isRent = false;
  }
  getDetail() {
    this.id = +this.routerActive.snapshot.paramMap.get("id")!;
    this.providerService.getProviderInfor(this.id).subscribe(
      (res)=> {
        this.profile=res[0];
        console.log(this.profile);
      },error=>console.log(error)
    )

  }




}
