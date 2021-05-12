import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/Service/search.service';
import { ShowListService } from 'src/app/Service/show-list.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  showlists: any=[];
  all:Array<string>=[];
  image_path = environment.image_url;
  constructor(
    private showlistService: ShowListService,
    private searchService: SearchService,
    
  ) { }

  isDropdown: boolean = false;

  ngOnInit(): void {
      
    this.ShowList();
    

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
        
        console.log(this.showlists[0].name)
      })
     
  }
  search(e:any){
    let city = e.target.value;
    let gender = e.target.value;
    let All=this.all.push (city,gender);
    console.log(this.ShowList);
    if(All){
      let formData = new FormData();
        formData.append('city',city);
        formData.append('gender',gender);
     console.log(this.all);
      this.searchService.search(formData).subscribe(
      (res)=>{
        console.log(res);
        this.showlists=res;
        // this.router.navigate(['/users'])
       
      })
    }else{
      this.ShowList();
    }
   
  }
}
