import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/Service/request.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  times =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  requestForm!:FormGroup;
  status_id!:1;

  constructor(private fb:FormBuilder,
    private requestService: RequestService,
    private toast:ToastrService
    ) { }

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      provider_id:[''],
      user_id:'',
      status_id:'',
      address:['',Validators.required],
      start_time:['',Validators.required],
      time:['',Validators.required],
      date:['',Validators.required],
      money_amount:['',Validators.required],
      message:'',
    })

  }
  createRequest(){
    console.log(this.requestForm.value)
    let data = this.requestForm.value;
    this.requestService.createRequest(data).subscribe(
      (res)=> {
        console.log(res);
      }
    )
    this.toast.success('Dang ky thanh cong!!!');
    
  }

}
