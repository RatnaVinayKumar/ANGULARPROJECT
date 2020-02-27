import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class CubePipe implements PipeTransform {

  transform(value: number): number {
    let a=Math.pow(value,3);
    return a;
  }

}
