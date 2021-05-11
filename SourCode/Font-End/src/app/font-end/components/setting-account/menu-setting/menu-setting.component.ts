import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterServiceService } from 'src/app/Service/register-service.service';

@Component({
  selector: 'app-menu-setting',
  templateUrl: './menu-setting.component.html',
  styleUrls: ['./menu-setting.component.css']
})
export class MenuSettingComponent implements OnInit {
  isDropdownSetting:boolean=false;
  isDropdownPlayer:boolean=false;
  // updateProvider:any=[];
  // detail:any=[];
  // id:any;
  isDropdownPlayerSetting:boolean=false;
  constructor(
    private registerService:RegisterServiceService,
    private routerAcitve:ActivatedRoute

  ) { }
    
  ngOnInit(): void {
    // this.id= +this.routerAcitve.snapshot.paramMap.get("id")!;
    // this.getId();
  }
  
//   isclickAccount(){
//     this.isDropdownSetting = true;
//   }
// getId(){
//   console.log(12312)
//   this.id= +this.routerAcitve.snapshot.paramMap.get("id")!;
  
//   this.registerService.getIdProvider(this.id).subscribe((res)=>{
//     this.updateProvider=res[0];
//     console.log(this.updateProvider[0].id)

//   })
// }

}
