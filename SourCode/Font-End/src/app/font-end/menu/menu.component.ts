import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userName = '';
  detail:any= {};
  image_path = environment.image_url;
  constructor(
    private router:Router,
    private authService:AuthService,
  ) { }
  isDropdownAccount: boolean=false; 
  ngOnInit(): void {
    this.userName = sessionStorage.getItem('user')!;
    this.pageUser();
  }
  clickAccount(){
    this.isDropdownAccount=true;
  }
  logout(){
    if(confirm('Are you sure want to logout?')){
      this.authService.logout().subscribe((res) => {

        if(res.status === 'success'){
          sessionStorage.clear();
          this.router.navigate(['login']);
        }
      })
    }
  }
  pageUser() {
    
    this.authService.getUser().subscribe(
      (res)=>{
        this.detail=res;
        
        console.log(res)
      })
     
  }
}
