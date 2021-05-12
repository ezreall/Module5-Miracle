import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Profile } from './profile';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegisterServiceService } from 'src/app/Service/register-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  createForm!: FormGroup;
  showService: Array<any> = [];
  listValue: Array<string> = [];
  imgSrc: string = '';
  imgFile: any;
  imgFiles: any;
  urls: Array<string> = [];
  // masterSelected!: boolean;

  // @ViewChild('myCheckbox') myCheckbox: any;



  constructor(private registerService: RegisterServiceService,
    private route: Router,
    private formBuilder: FormBuilder,
    private toast: ToastrService

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
      // price_per_hour: ['', [Validators.required]],
      city: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
      image: ['', [Validators.required]],
      // service_id: ['', [Validators.required]],
    });
    // this.showServices();
  }

  onSubmit() {
    let formData = new FormData();
    let data = this.createForm.value;
    formData.append('name', data.name);
    formData.append('weight', data.weight);
    formData.append('height', data.height);
    formData.append('required', data.required);
    formData.append('hobby', data.hobby);
    formData.append('description', data.description);
    formData.append('date_of_birth', data.date_of_birth);
    formData.append('face_book', data.face_book);
    formData.append('country', data.country);
    formData.append('voice', data.voice);
    // formData.append('price_per_hour', data.price_per_hour);
    formData.append('city', data.city);
    formData.append('gender', data.gender);
    formData.append('avatar', this.imgFile, this.imgFile.name);
    for (let i = 0; i < this.urls.length; i++) {

      formData.append('image[]', this.urls[i])

    }
    // formData.append('service_id', JSON.stringify(this.listValue));

    console.log(formData.get('service_id'));


    this.registerService.registerUser(formData).subscribe((res: any) => {
      
      if(res.status == 'error'){
        this.toast.warning('Bạn không thể đăng ký.Dịch vụ đã đăng ký ');
      }else{
        this.toast.success('Chúc mừng bạn đã đăng ký thành công')

      }
      console.log(res)
    });
  }

  onImageChange(e: any) {
    // console.log(e.target.result)
    // let data = this.createForm?.value;
    // console.log(data)
    const reader = new FileReader();
    if (e.target.files.length && e.target.files) {
      this.imgFile = e.target.files[0];

      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result
        // console.log(e.target.result)
      }
    }

  }


  onImageSelect(e: any) {
    // console.log(e.target.files)

    if (e.target.files) {
      // console.log(e.target.files)
      for (let i = 0; i < e.target.files.length; i++) {
        // const reader = new FileReader();
        this.imgFiles = e.target.files[i];
        this.urls.push(this.imgFiles);
        // reader.readAsDataURL(e.target.files[i]);
        // reader.onload = (events: any) => {
          // this.urls.push(events.target.result);
          // console.log(this.urls);
         
        //   console.log(events.target.result)
        //   console.log(this.urls);
        // }


      }

    }
  }




}
