import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: NgbDateStruct, ...args: unknown[]): unknown {
    let date = new Date(`${value.year}/${value.month}/${value.day}`)
 
    return date;
  }

}
