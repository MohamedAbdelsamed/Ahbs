import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent implements OnInit {

  departments = [
    { id: 1, name: 'warehouse 8 type 1' },
    { id: 2, name: 'warehouse 8 type 2 ' },
    { id: 3, name: 'warehouse 8 type 3' },
    { id: 4, name: 'warehouse 8 type 4' },
    { id: 5, name: 'warehouse 8 type 5' },
    { id: 6, name: 'warehouse 8 type 6' },
    { id: 7, name: 'warehouse 8 type 7' },
    { id: 8, name: 'warehouse 8 type 8' },
  ]

  model: NgbDateStruct;
  AllEmployees: any[] = [];
  constructor() { }
  department
  radioChoise
  ngOnInit(): void {
  }

  searchEmps(form:NgForm){
    console.log(form);
    
    let allEmps = localStorage.getItem('AllEmployees') ;
    
    if(allEmps){
      
      let pastEmps:any[] = JSON.parse(allEmps);
      this.AllEmployees = pastEmps.filter(e=> { 
        const conditionOne = e.name ? (e.name as string).includes(form.controls.empName.value) : false; 
       
       const conditionTwo = e.departmentId ? +e.departmentId === form.controls.department.value : false;
      

       return (conditionOne && conditionTwo )
     }
      
      )
    }else {
      return; // no employees found
    }
    
    
  }
  
}
