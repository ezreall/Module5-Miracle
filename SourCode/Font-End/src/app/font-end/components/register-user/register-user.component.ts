import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Profile } from './profile';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RegisterServiceService } from 'src/app/Service/register-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  createForm!: FormGroup;
  showService: Array<any> = [];

  // @ViewChild('myCheckbox') myCheckbox: any;



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
    let data = this.createForm.value;
    console.log(data)
    this.registerService.registerUser(data).subscribe((res: any) => {

      console.log(res)
    });
  }


  showServices() {
    this.registerService.getService().subscribe((res) => {
      this.showService = res;
      // console.log(123);
      console.log(this.showService);
    })
  }

  setValueCheckbox(e: any) {
    console.log(e.target.value);
    let value = e.target.value
    if (e.target.checked) {
      this.showService.push(value);
    } else {
      let index = this.showService.indexOf(value);
      console.log('idx: ' + index);
      this.showService.splice(index, 1)
    }
    console.log(this.showService)
  }




  // getServiceId(e:any,id:string){
  //   if(e.target.checked){
  //     console.log(id + 'Checked');
  //       this.selectItem.push(id);
  //   }else{
  //     console.log(id + 'UNChecked');

  //     this.selectItem = this.selectItem.filter(m=>m! = id);
  //   }
  //   console.log(this.selectItem);
  // }




  // onChange(service_id:any,isChecked:boolean){
  //   const serviceFormArray = <FormArray>this.createForm.controls.service_id;
  //   if(isChecked){
  //     serviceFormArray.push(new FormControl(service_id));
  //   }else{
  //     let index = serviceFormArray.controls.findIndex(x => x.value == service_id);
  //     serviceFormArray.removeAt(index);

  //   }

  // }

  // this.user.isTCAccepted = form.controls['tc'].value;
//   GetStats(event: Event) {
//     // console.log(event.target.name, event.target.value, event.target.checked);
//     console.log(event.target?.removeEventListener.name)
// }

  
 


  
}
