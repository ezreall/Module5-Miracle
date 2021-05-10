import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-detail-account',
  templateUrl: './detail-account.component.html',
  styleUrls: ['./detail-account.component.css']
})
export class DetailAccountComponent implements OnInit {
    account : any=[];
  constructor(
    private accountService:AuthService
  ) { }

  ngOnInit(): void {
    this.ShowList()
  }
  ShowList() {
    
    this.accountService.getUser().subscribe(
      (res)=>{
        this.account=res;
        
        console.log(res)
      })
     
  }


}
