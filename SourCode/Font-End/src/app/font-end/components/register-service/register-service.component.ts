import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterServiceService } from 'src/app/Service/register-service.service';
import { Provider } from './provider';

@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.css']
})
export class RegisterServiceComponent implements OnInit {
  listValue: Array<string> = [];
  showService: Array<any> = [];
  showServiceTwo:  any= [];
  showServiceThree:  any= [];

  createForm!: FormGroup;
  // service: any;
  showProfile: Array<any> = [];
  id:any;
  provider!: Provider;

  constructor(private registerService: RegisterServiceService,
              private formBuilder: FormBuilder,
              private routeActive: ActivatedRoute,
              private toast: ToastrService

    ) { }

  ngOnInit(): void {
    console.log(this.routeActive.snapshot.params['id']) ;
    
    this.createForm = this.formBuilder.group({
      price_per_hour: [''],
      service_id: [''],
    });

    this.showServices();
    this.showServicesTwo();
    this.showServicesThree();
    
  }

  onSubmit(){
    

    // console.log(this.updateForm.value)
    let formData = new FormData();
    let data = this.createForm.value;
    formData.append('price_per_hour', data.price_per_hour);
    formData.append('service_id', JSON.stringify(this.listValue));
    this.registerService.registerService(formData).subscribe((res)=>{
      data = res;
            this.toast.success('Chúc mừng bạn đã đăng ký thành công')

      console.log(res);
    });

  }

  
  showServices() {
    this.registerService.getService().subscribe((res) => {
      this.showService = res[0];
      console.log(res);
      // console.log(this.showService);
    })
  }
  showServicesTwo() {
    this.registerService.getService().subscribe((one) => {
      this.showServiceTwo = one[1];
      // console.log(this.showServiceTwo.service);
      console.log(this.showServiceTwo[0]);
    })
  }
  showServicesThree() {
    this.registerService.getService().subscribe((res) => {
      this.showServiceThree = res[2];
      console.log(res);
      // console.log(this.showService);
    })
  }

  setValueCheckbox(e: any) {
    // console.log(e.target.value);
    let value = e.target.value
    if (e.target.checked) {
      this.listValue.push(value);
    
    } else {
      let index = this.listValue.indexOf(value);
      // console.log('idx: ' + index);
      this.listValue.splice(index, 1)
    }
    console.log(this.listValue)
  }

}
