import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProviderService } from 'src/app/Service/font-end/provider.service';
import { RequestService } from 'src/app/Service/font-end/request.service';
import { Provider } from '../class/provider';
import { DetailComponent } from '../detail/detail.component';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  isRent: boolean = false;
  times: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  requestForm!: FormGroup;
  status_id!: 1;
  profile: Provider = {};
  id!: number;

  total_test!: number;

  constructor(private fb: FormBuilder,
    private requestService: RequestService,
    private toast: ToastrService,
    private provider: ProviderService,
    private routerActive: ActivatedRoute,
    private detail: DetailComponent
  ) { }

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      provider_id: [''],
      user_id: '',
      status_id: '',
      address: ['', Validators.required],
      start_time: ['', Validators.required],
      time: ['', Validators.required],
      date: ['', Validators.required],
      price_per_hour: [''],
      money_amount: ['', Validators.required],
      message: '',
    })

  }

  getProvider() {
    this.id = +this.routerActive.snapshot.paramMap.get("id")!;
    console.log(this.id)
    this.provider.getProvider(this.id).subscribe(
      (res) => {
        this.profile = res[0];
        console.log(this.profile);
        this.requestForm.patchValue({
          provider_id: this.profile.id,
          price_per_hour: this.profile.price_per_hour,

        })
      }
    )

  }

  createRequest() {

    let data = this.requestForm.value;
    this.requestService.createRequest(data).subscribe(
      (res) => {
        console.log(res);
      }
    )
    this.requestForm.reset();
    this.close();
    this.toast.success('Dang ky thanh cong!!!');

  }

  click() {
    this.id = +this.routerActive.snapshot.paramMap.get("id")!;
    this.provider.getProvider(this.id).subscribe(
      (res) => {
        this.profile = res;
        console.log(this.profile)
        this.requestForm.patchValue({
          provider_id: this.profile.id,
         
        })
      }
    )
    this.isRent = true;  
  }
  change() {
    
  }

  changeValueForm(){
    this.requestForm.valueChanges.subscribe(
      (form) => {
        let time = form.time;
        let price = this.profile.price_per_hour!;
        this.total_test = time * price;
      })

  }


  close() {
    this.isRent = false;
  }

}
