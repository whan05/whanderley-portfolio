import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipe implements PipeTransform {

  transform( image: string, format: string ) {

    if (!image) {
      return '';
    }

    return `assets/${image}.${format}`;
  }

}
