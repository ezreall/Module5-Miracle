import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowListService } from 'src/app/Service/show-list.service';

import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {
  showlists: any=[];
  detail:any = [];
  id!: number;
  showlist: any=[];
  image_path = environment.image_url;

  constructor(
    private showlistService: ShowListService,
    private routerActive:ActivatedRoute,
    private router: Router,
    private formbd: FormBuilder    
  ) { }
  isDropdown: boolean = false;
  ngOnInit(): void {
    this.ShowList();
    this.one();
  }
  click() {
    this.isDropdown = true;
  }
  close() {
    this.isDropdown = false;
  }
  ShowList() {
    
    this.showlistService.showlist().subscribe(
      (res)=>{
        this.showlists=res[0];
        console.log(this.showlists)
        
      })
     
  }
  Detail() {
    this.id = +this.routerActive.snapshot.paramMap.get("id")!;
    console.log(this.id)
    this.showlistService.profileDetail(this.id).subscribe(
      (res)=> {
        this.detail=res[0];
        console.log(this.detail)
      }
    )     
        console.log(this.showlists[0])
  }
  one() {
    this.showlistService.showlist().subscribe(
      (one)=>{
        this.showlist=one[1];
        console.log(one[1])
      })
  }
}
