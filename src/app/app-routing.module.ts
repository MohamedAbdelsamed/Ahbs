import { SharedModule } from './modules/shared/shared.module';
import { ProductModule } from './modules/product/product.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/core/components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)},
  {path: 'employees', loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
