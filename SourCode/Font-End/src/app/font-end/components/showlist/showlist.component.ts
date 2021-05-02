import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {

  constructor() { }
  isDropdown: boolean = false;
  ngOnInit(): void {
  }
  click() {
    this.isDropdown = true;
  }
  close() {
    this.isDropdown = false;
  }
}
