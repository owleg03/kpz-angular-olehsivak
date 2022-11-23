import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipe implements PipeTransform {

  currencySymbol = '$';

  transform(value: unknown): string {
    return this.currencySymbol + value?.toString();
  }

}
