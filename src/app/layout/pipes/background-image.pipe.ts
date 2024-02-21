import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgroundImage'
})
export class BackgroundImagePipe implements PipeTransform {

  transform( background: string ) {

    if (!background) {
      return '';
    }

    return `assets/${background}.jpg`;
  }

}
