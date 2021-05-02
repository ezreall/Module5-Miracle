import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

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
