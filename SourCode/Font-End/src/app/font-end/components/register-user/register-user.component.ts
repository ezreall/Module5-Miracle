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
  createForm!: FormGroup;
  showService: any;





  constructor(private registerService: RegisterServiceService,
              private route: Router,
              private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      height: ['', [Validators.required]],
      required: ['', [Validators.required]],
      hobby: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]],
      face_book: ['', [Validators.required]],
      voice: ['', [Validators.required]],
      country: ['', [Validators.required]],
      price_per_hour: ['', [Validators.required]],
      city: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
      image: ['', [Validators.required]],
      service_id: ['', [Validators.required]],
    });
    this.showServices();
  }

  onSubmit() {  
    let data =this.createForm.value;
    console.log(data)
    this.registerService.registerUser(data).subscribe((res: any) => {

      console.log(res)
    });
  }


  showServices(){
    this.registerService.getService().subscribe((res)=>{
      this.showService = res;
      // console.log(123);
      console.log(this.showService);
    })
  }
  


 


  
}
