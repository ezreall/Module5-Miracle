import { Component, OnInit } from '@angular/core';
import { ShowListService } from 'src/app/Service/show-list.service';

@Component({
  selector: 'app-detail-player',
  templateUrl: './detail-player.component.html',
  styleUrls: ['./detail-player.component.css']
})
export class DetailPlayerComponent implements OnInit {

  constructor(
    private listdetail:ShowListService,
    
  ) { }
  isRent :boolean=false;
  id!:number;
  detailplayer!:any;
  
  ngOnInit(): void {
  }
  click() {
    this.isRent = true;
  }
  close() {
    this.isRent = false;
  }




}
