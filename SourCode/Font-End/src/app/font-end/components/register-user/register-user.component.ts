import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import {NgForm} from '@angular/forms';
import { RegisterServiceService } from 'src/app/Service/register-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  profile: Profile = new Profile();
  submit = false;
  constructor(private registerService: RegisterServiceService,
              private route: Router
    ) { }

  ngOnInit(): void {
    this.submit = false;

  }

  onSubmit(){
    this.submit = true;
    this.store();
  }

  store(){
    this.registerService.registerUserService
      
  }

}
