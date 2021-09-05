import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
import { ProductModule } from '../product/product.module';


@NgModule({
  declarations: [AddEmployeeComponent, SearchEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    ProductModule
  ],
  exports:[
    AddEmployeeComponent,
    SearchEmployeeComponent
  ]
})
export class EmployeeModule { }
