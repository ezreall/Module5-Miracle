import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterServiceService } from 'src/app/Service/register-service.service';
import { User } from './user';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  imgSrc: string = '';
  imgFile: any;
  updateForm!:FormGroup;
  users:User={};
  isDropdown: boolean = false;
  submitted = false;

  constructor(private routerAcitve:ActivatedRoute,
    private formBuilder:FormBuilder,
    private registerService: RegisterServiceService,
    private toats: ToastrService,
    private route:Router) { }

  ngOnInit(): void {
    this.submitted = true;

    this.updateForm = this.formBuilder.group({
      name:['',[Validators.required]],
      phone:['',[Validators.required]],
      nick_name:['',[Validators.required]],
      gender:['',[Validators.required]],
      date_of_birth:['',[Validators.required]],
      avatar:[''],
    });

  }
  get f() { return this.updateForm.controls; }

  click() {
    this.isDropdown = true;
  }
  close() {
    this.isDropdown = false;
  }
  onSubmit(){
    let data = this.updateForm.value;
    let formdata = new FormData();
    formdata.append('name',data.name);
    formdata.append('phone',data.phone);
    formdata.append('nick_name',data.nick_name);
    formdata.append('gender',data.gender);
    formdata.append('date_of_birth',data.date_of_birth);
    formdata.append('avatar',this.imgFile,this.imgFile.name);
    this.registerService.updateProfileUser(formdata).subscribe((res)=>{
      this.toats.success('Cập nhập thành công');
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

}
