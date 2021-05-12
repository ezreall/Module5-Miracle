import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ResgiterService } from 'src/app/Service/resgiter.service';
import { User } from 'src/app/User/user';
import { MustMatch } from 'src/app/_helpers/must-match.validator';

@Component({
  selector: 'app-resgiter',
  templateUrl: './resgiter.component.html',
  styleUrls: ['./resgiter.component.css']
})
export class ResgiterComponent implements OnInit {
  user: User = new User();
  createResgiter!:FormGroup;
  submitted = false;
  constructor(
    private UserService: ResgiterService,
    private router: Router,
    private toastr: ToastrService,
    private formbd:FormBuilder


  ) { 
    this.createResgiter = this.formbd.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(9)]]
    },{
      validator: MustMatch('password', 'confirmPassword')
    })
  }

  ngOnInit(): void {

    // console.log(this.user)
  }
  newUser(): void {
    this.user = new User();
  }
  save() {
    let data =this.createResgiter.value;
    // console.log(data)
    this.UserService
      .register(data).subscribe((res: any) => {
        if(res) {
          console.log(res)
          this.toastr.success("Đăng ký thành công")
          this.user = new User();
          this.gotoLogin();
        }
      },
        (error: any) => this.toastr.error("Đăng ký thất bại, tài khoản đã tồn tại"));
  }
  get f() { return this.createResgiter.controls; }
  gotoLogin() {
    this.router.navigate(['login'])
  }
  onSubmit() {
    
    this.submitted = true;
    
    this.save()
    // console.log(this.user)
  }

}
