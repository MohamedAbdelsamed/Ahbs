import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, BreadCrumbComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  exports:[
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BreadCrumbComponent
  ]
})
export class CoreModule { }
