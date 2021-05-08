import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowListService } from 'src/app/Service/show-list.service';
@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {
  showlists: any=[];

  constructor(
    private showlistService: ShowListService,
    private router: Router,
    private formbd: FormBuilder
  ) { }
  isDropdown: boolean = false;
  ngOnInit(): void {
    this.ShowList()
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
