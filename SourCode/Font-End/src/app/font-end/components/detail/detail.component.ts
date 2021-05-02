import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  isRent :boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  click() {
    this.isRent = true;
  }
  close() {
    this.isRent = false;
  }
}
