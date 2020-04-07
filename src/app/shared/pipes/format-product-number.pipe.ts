import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatProductNumber'
})
export class FormatProductNumberPipe implements PipeTransform {

  transform(value: any, product: string): any {
    if (product === 'CREDIT_CARD') {
      return value.replace(/(\d{4})/g, '$1 ').trim().replace(/\d{4}(?= \d{4})/g, "xxxx");;
    } else {
      return value;
    }
  }

}
