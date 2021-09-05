import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  departments = [
    { id: 1, name: 'departments 1' },
    { id: 2, name: 'departments 2 ' },
    { id: 3, name: 'departments 3' },
    { id: 4, name: 'departments 4' },
    { id: 5, name: 'departments 5' },
    { id: 6, name: 'departments 6' },
    { id: 7, name: 'departments 7' },
    { id: 8, name: 'departments 8' },
  ]

  model: NgbDateStruct;
  constructor() { }
  department;
  radioChoise
  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    let addedEmployee = {
      name: form.controls.empName.value,
      empCode: form.controls.empCode.value,
      departmentId: this.department,
      gender: this.radioChoise,
      date: form.controls.dp.value
    }
    let allEmps = localStorage.getItem('AllEmployees');
    if (allEmps) {
      this.setEmployeeToLocalStorage(JSON.parse(allEmps),addedEmployee);
    } else {
      this.setEmployeeToLocalStorage([],addedEmployee);
    }
  }
  setEmployeeToLocalStorage(allEmps:any[],addedEmployee){
    let pastEmps: any[] = allEmps;
    pastEmps.push(addedEmployee);
    localStorage.setItem('AllEmployees', JSON.stringify(pastEmps))
  }

 
}
