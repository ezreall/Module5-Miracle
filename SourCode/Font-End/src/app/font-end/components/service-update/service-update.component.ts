import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.css']
})
export class ServiceUpdateComponent implements OnInit {
  id!:number;
  updateForm!:FormGroup;
  constructor(private routerAcitve:ActivatedRoute,
              private formBuilder:FormBuilder,
    ) { }

  ngOnInit(): void {
    this.id = +this.routerAcitve.snapshot.paramMap.get("id")!;
    console.log(this.id);

    this.updateForm = this.formBuilder.group({
      price_per_hour: [''],
      service_id: [''],
    });
  }

  

}
