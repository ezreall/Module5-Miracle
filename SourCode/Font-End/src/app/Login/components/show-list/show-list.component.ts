import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowListService } from 'src/app/Service/show-list.service';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  showlists: any=[];
  image_path = environment.image_url;
  constructor(
    private showlistService: ShowListService,
    
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
}
