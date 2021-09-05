import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProductComponent, ProductInfoComponent, ProductGridComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  exports:[
      ProductInfoComponent,
      ProductGridComponent
  ]  
})
export class ProductModule { }
