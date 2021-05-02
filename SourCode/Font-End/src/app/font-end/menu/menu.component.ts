import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  isDropdownAccount: boolean=false;
  ngOnInit(): void {
  }
  clickAccount(){
    this.isDropdownAccount=true;
  }
}
