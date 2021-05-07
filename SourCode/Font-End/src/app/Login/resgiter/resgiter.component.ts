import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { ResgiterService } from 'src/app/Service/resgiter.service';
import { User } from 'src/app/User/user';
@Component({
  selector: 'app-resgiter',
  templateUrl: './resgiter.component.html',
  styleUrls: ['./resgiter.component.css']
})
export class ResgiterComponent implements OnInit {
  user: User = new User();
  createResgiter!:FormGroup;
  constructor(
    private UserService: ResgiterService,
    private router: Router,
    private toastr: ToastrService,
    private formbd:FormBuilder


  ) { 
    // this.createResgiter = this.formbd.group({
    //   name: ['', Validators.required],
    //   image: ['', Validators.required],
    //   country: ['', Validators.required]
    // })
  }

  ngOnInit(): void {
  }
  newUser(): void {
    this.user = new User();
  }

  save() {
    this.UserService
      .register(this.user).subscribe((data: any) => {
        if (data) {
          this.toastr.success("Đăng ký thành công")
          this.user = new User();
          this.gotoLogin();
        }
      },
        (error: any) => this.toastr.error("Đăng ký thất bại, tài khoản đã tồn tại"));
  }

  gotoLogin() {
    this.router.navigate(['login'])
  }
  onSubmit() {
   console.log(this.user)
    this.save();
  }

}