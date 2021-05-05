import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userName = '';

  constructor(
    private router:Router,
    private authService:AuthService
  ) { }
  isDropdownAccount: boolean=false; 
  ngOnInit(): void {
    this.userName = sessionStorage.getItem('user')!;
  }
  clickAccount(){
    this.isDropdownAccount=true;
  }
  logout(){
    if(confirm('Are you sure want to logout?')){
      
      this.authService.logout().subscribe((res) => {
        console.log(res);
        console.log(res.status === 'success')
        if(res.status === 'success'){
          sessionStorage.clear();
          this.router.navigate(['login']);
          alert(res.message);
        }
      })
    }
  }
}
