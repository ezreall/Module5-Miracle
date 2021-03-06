
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';



const user_key = 'token';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  login:boolean=true;
  register :boolean=false;
  loginForm!: FormGroup;
  msg = '';


  submitted = false;

  constructor(
    private formbd: FormBuilder,
    private router: Router,
    private authServices: AuthService

  )
   { 
    this.loginForm = this.formbd.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required]})
      
   }
  ngOnInit(): void {
  
  }
  button(){
    this.register=true;
    this.login=false;
  }
  get f() { return this.loginForm.controls; }
  checkLogin() {
    this.submitted = true;
    console.log(this.loginForm?.value);
    let data = this.loginForm?.value;
    this.authServices.login(data).subscribe((res) => {
      console.log(res);
      if (res.status === 'successfully') {
        sessionStorage.setItem('token', res.token);
        console.log(res.user.name)
        sessionStorage.setItem('user', res.user.name);        
        this.router.navigate(['users']);
      } else {
    
        this.msg = res.msg;
      }
    })
  }
  getUser() {

  }
}
