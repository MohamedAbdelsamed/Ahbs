import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
hideMemu : boolean = false
  breadCrumb:any[] = [];
  constructor(private route:Router) {
    route.events.subscribe((event:NavigationEnd)=>{
      if (event.url){
        if (event.url.includes('products')){
          this.breadCrumb = [{name:'Products',route:'products'}]
        }else if (event.url.includes('search')){
          this.breadCrumb = [{name:'Employee',route:'employees'},{name:'Search',route:'employees/search'}]
        }else if (event.url.includes('employee')){
          this.breadCrumb = [{name:'AddEmployee',route:'employees'}]
        }
      }
    })
   }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.hideMemu = !this.hideMemu
  }
}
