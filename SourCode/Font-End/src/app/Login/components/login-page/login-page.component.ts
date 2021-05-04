import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Output() data = new EventEmitter<any>()
  @Input() userEdit :any;
  addUserForm!: FormGroup;
  name!:FormControl;
  email!:FormControl;
  phone!:FormControl;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password:['',[Validators.required]],
    })
  }

  addUser() {
    let value = this.addUserForm.value;
    this.data.emit(value)
  }

}
