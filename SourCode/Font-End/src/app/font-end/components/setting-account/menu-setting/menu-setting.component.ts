import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-setting',
  templateUrl: './menu-setting.component.html',
  styleUrls: ['./menu-setting.component.css']
})
export class MenuSettingComponent implements OnInit {
  isDropdownSetting:boolean=false;
  isDropdownPlayer:boolean=false;
  isDropdownPlayerSetting:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  isclickAccount(){
    this.isDropdownSetting = true;
  }

}
