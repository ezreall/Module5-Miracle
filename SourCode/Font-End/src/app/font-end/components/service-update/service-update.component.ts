import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterServiceService } from 'src/app/Service/register-service.service';
import { Provider } from './Provider';

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.css']
})
export class ServiceUpdateComponent implements OnInit {
  id!:number;
  updateForm!:FormGroup;
  listValue: Array<string> = [];
  showService:Array<string> = [];
  provider:Provider={};

  constructor(private routerAcitve:ActivatedRoute,
              private formBuilder:FormBuilder,
              private registerService: RegisterServiceService,
              private toats: ToastrService
    ) { }

  ngOnInit(): void {
    this.id = +this.routerAcitve.snapshot.paramMap.get("id")!;
    console.log(this.id);

    this.updateForm = this.formBuilder.group({
      price_per_hour: [''],
      service_id: [''],
    });
    // this.showServices();
    this.getServiceInfo();
  }

  onSubmit(){
    let data = this.updateForm.value;
    let formdata = new FormData();
    formdata.append('price_per_hour',data.price_per_hour);
    // formdata.append('service_id', JSON.stringify(this.listValue));
    this.registerService.updateService(formdata,this.id).subscribe((res)=>{
      this.toats.success('Bạn đã cập nhập giá dịch vụ thành công');
      console.log(res);
    });


  }

  // showServices() {
  //   this.registerService.getService().subscribe((res) => {
  //     this.showService = res;
  //     console.log(res[0]);
  //     console.log(this.showService);
  //   })
  // }

  getServiceInfo(){
    this.registerService.getMyService().subscribe((res)=>{
      this.provider = res[0];
        this.updateForm.patchValue({
          price_per_hour:this.provider.price_per_hour,
          service_id:this.provider.service_id,
                     
      });     
      console.log(this.provider.service_id);
    });
  }

  // setValueCheckbox(e: any) {
  //   // console.log(e.target.value);
  //   let value = e.target.value
  //   if (e.target.checked) {
  //     this.listValue.push(value);
    
  //   } else {
  //     let index = this.listValue.indexOf(value);
  //     // console.log('idx: ' + index);
  //     this.listValue.splice(index, 1)
  //   }
  //   console.log(this.listValue)
  // }

  

}
