import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';



const user_key = 'token';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  message = '';

  isRegister: boolean = false;
  constructor(
    private formbd: FormBuilder,
    private router: Router,
    private authServices: AuthService

  ) { }

  ngOnInit(): void {
  }
  checkLogin() {
    console.log(this.loginForm?.value);
    let data = this.loginForm?.value;
    this.authServices.login(data).subscribe((res) => {
      console.log(res);
      if (res.status === 'successfully') {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('user_name', res.user.name);
        this.router.navigate(['home']);
      } else {
        this.message = res.message;
      }
    })
  }
  getUser() {

  }
}
