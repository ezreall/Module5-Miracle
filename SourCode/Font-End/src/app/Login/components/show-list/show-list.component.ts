import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/Service/search.service';
import { ShowListService } from 'src/app/Service/show-list.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  showlists: any=[];
  list:any=[];
  all:Array<string>=[];
  service:any=[];
  Search!: FormGroup;
  image_path = environment.image_url;
  constructor(
    private showlistService: ShowListService,
    private searchService: SearchService,
    private formbd: FormBuilder,
    private router: Router
    
  ) { }

  isDropdown: boolean = false;

  ngOnInit(): void {
    this.ShowList();
    this.showService();
    this.Search = this.formbd.group({
      city: [''],
      gender: ['']
    })
    
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
        console.log(this.showlists)
        // console.log(this.showlists[0].name)
      })
     
  }

  RentTime() {
    this.showlistService.rentTime().subscribe(
      (res)=> {
        this.list= res[0];
        console.log(this.list)

      }
    )
  }
  search() {
    this.isDropdown = false;
      let data = this.Search.value;
      let formData = new FormData();
      if(data){
        formData.append('city',data.city);
        formData.append('gender',data.gender );
     console.log(123)
      this.searchService.search(formData).subscribe(
        (res) => {
          console.log(res);
          
          this.showlists = res;
        })
      }else{
        console.log(123)
        this.router.navigate(['users'])
        this.ShowList();
      }
     
        console.log(123)
      // }

  }
  reload(){
    window.location.reload();
  }
  Array(e: any){
    let city = e.target.value;
    let gender = e.target.value;
    console.log(gender)
     this.all.push(city,gender);
    console.log(this.all)
  }
  showService(){
    
    this.showlistService.showService().subscribe(
      (res)=>{
        this.service=res;
        console.log(this.service);
      }
    )
  }
  searchName(e: any){   
    let name = e.target.value;
    if(name){
      let formData = new FormData();
      formData.append('name', name);
      this.searchService.searchName(formData).subscribe(
        (res)=>{
          this.showlists=res;
        }
      )}else{
        this.ShowList();
      }
    }
}
