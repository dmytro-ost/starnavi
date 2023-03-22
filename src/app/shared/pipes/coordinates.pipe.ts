import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coordinates',
  pure: true
})
export class CoordinatesPipe implements PipeTransform {
  transform(value: number, sideSize: number): string {
    let row = 1 + Math.floor((value) / sideSize);
    let col = (value + 1) % sideSize || sideSize;

    return `row ${row} col ${col}`;
  }

}
