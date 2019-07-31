import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fab'
})
export class FabPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
