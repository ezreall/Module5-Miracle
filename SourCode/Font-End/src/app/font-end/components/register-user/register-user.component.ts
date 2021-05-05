import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegisterServiceService } from 'src/app/Service/register-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  // profile: Profile = new Profile();
  createForm!: FormGroup;
  profile: any;
  id:any;




  submitted = false;
  constructor(private registerService: RegisterServiceService,
    private route: Router,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      weight: ['',[Validators.required]],
      height: ['',[Validators.required]],
      required: ['',[Validators.required]],
      hobby: ['',[Validators.required]],
      description: ['',[Validators.required]],
      date_of_birth: ['',[Validators.required]],
      voice: ['',[Validators.required]],
      country: ['',[Validators.required]],
      city: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      avatar: ['',[Validators.required]],
      image: ['',[Validators.required]],
    });

    this.profile = new Profile();

    this.id = localStorage.getItem('id');
  }

  onSubmit() {
    this.store();
  }

  store() {
    this.profile.user_id = this.id;
    this.registerService.registerUserService(this.profile).subscribe((data:any)=> {
      this.profile = new Profile();
      // this.route.navigate(['list'])
    });

  }

}
