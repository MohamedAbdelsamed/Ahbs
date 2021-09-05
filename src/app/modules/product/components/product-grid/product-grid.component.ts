import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
@Input() products = [];
@Input() employee = [];
@Input() name = "";
constructor() {
 
}

  ngOnInit(): void {
  
  }

  

}

