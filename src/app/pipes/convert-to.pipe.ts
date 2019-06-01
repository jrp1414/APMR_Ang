import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class ConvertToPipe implements PipeTransform {

  transform(value: string, fromChar:string,toChar:string): any {
    return value.replace(fromChar,toChar);
  }

}
