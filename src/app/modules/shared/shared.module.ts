import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDatePipe } from './pipes/custom-date.pipe';




@NgModule({
  declarations: [CustomDatePipe],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    NgSelectModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [TranslateModule,
    NgSelectModule,
    FormsModule,
    NgbModule,
    CustomDatePipe,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class SharedModule { }
