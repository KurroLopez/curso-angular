import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number, exponent: number): number {
    return value ** exponent;
  }

}
