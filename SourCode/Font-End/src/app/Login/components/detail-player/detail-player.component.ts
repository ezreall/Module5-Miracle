import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-player',
  templateUrl: './detail-player.component.html',
  styleUrls: ['./detail-player.component.css']
})
export class DetailPlayerComponent implements OnInit {

  constructor() { }
  isRent :boolean=false;

  ngOnInit(): void {
  }
  click() {
    this.isRent = true;
  }
  close() {
    this.isRent = false;
  }
}
