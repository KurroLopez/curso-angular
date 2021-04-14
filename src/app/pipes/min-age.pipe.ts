import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minAge'
})
export class MinAgePipe implements PipeTransform {

  transform(users: any[], minage: number): any[] {
    return users.filter(user => user.age >= minage);
  }

}
