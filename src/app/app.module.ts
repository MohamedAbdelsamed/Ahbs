import { EmployeeModule } from './modules/employee/employee.module';
import { ProductModule } from './modules/product/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalizationsService } from './services/localizations.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'../assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    SharedModule,
    CoreModule,
    ProductModule,
    EmployeeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (private localization: LocalizationsService){

  }
  
}
