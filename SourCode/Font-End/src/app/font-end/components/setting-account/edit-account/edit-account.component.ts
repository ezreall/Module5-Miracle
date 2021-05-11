import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  imgSrc: string = '';
  imgFile: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  onImageChange(e: any) {
    // console.log(e.target.result)
    // let data = this.createForm?.value;
    // console.log(data)
    const reader = new FileReader();
    if (e.target.files.length && e.target.files) {
      this.imgFile = e.target.files[0];

      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result
        // console.log(e.target.result)
      }
    }

  }

}
