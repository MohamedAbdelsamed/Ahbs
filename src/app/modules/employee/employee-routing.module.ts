import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';


const routes: Routes = [
    { path: '', component: AddEmployeeComponent },
    {path: 'search', component: SearchEmployeeComponent}
      
      
    
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
