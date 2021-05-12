import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/Service/search.service';
import { ShowListService } from 'src/app/Service/show-list.service';

import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {
  isDropdownAccount: boolean=false; 
  submitted = false;
  showlists: any = [];
  detail: any = [];
  id!: number;
  showlist: any = [];
  image_path = environment.image_url;
  Search!: FormGroup;
  all:Array <any>= [];
  constructor(
    private showlistService: ShowListService,
    private routerActive: ActivatedRoute,
    private router: Router,
    private formbd: FormBuilder,
    private searchService: SearchService
  ) { }
  isDropdown: boolean = false;
  ngOnInit(): void {
    this.ShowList();
    this.one();
    this.Search = this.formbd.group({
      city: [''],
      gender: ['']
    })

  }
  click() {
    this.isDropdown = true;
    
  }
  close() {
    
    this.isDropdown = false;
  }
  reload(){
    window.location.reload();
  }
  ShowList() {

    this.showlistService.showlist().subscribe(
      (res) => {
        this.showlists = res[0];
        console.log(this.showlists)
      })
  }
  Detail() {
    this.id = +this.routerActive.snapshot.paramMap.get("id")!;
    console.log(this.id)
    this.showlistService.profileDetail(this.id).subscribe(
      (res) => {
        this.detail = res[0];
        console.log(this.detail)
      }
    )
    console.log(this.showlists[0])
  }
  one() {
    this.showlistService.showlist().subscribe(
      (one) => {
        this.showlist = one[1];
        console.log(one[1])
      })
  }
  search() {
    this.isDropdown = false;
      let data = this.Search.value;
      let formData = new FormData();
      if(data){
        formData.append('city',data.city);
        formData.append('gender',data.gender );
     console.log(123)
      this.searchService.search(formData).subscribe(
        (res) => {
          console.log(res);
          
          this.showlists = res;
        })
      }else{
        console.log(123)
        this.router.navigate(['users'])
        this.ShowList();
      }
     
        console.log(123)
      // }

  }
  Array(e: any){
    let city = e.target.value;
    let gender = e.target.value;
    console.log(gender)
     this.all.push(city,gender);
    console.log(this.all)
  }

  searchName(e: any){   
    let name = e.target.value;
    if(name){
      let formData = new FormData();
      formData.append('name', name);
      this.searchService.searchName(formData).subscribe(
        (res)=>{
          this.showlists=res;
        }
      )}else{
        this.ShowList();
      }
    }

}
