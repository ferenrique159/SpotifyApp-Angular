import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImages'
})
export class NoImagesPipe implements PipeTransform {

  transform(images: any[]): string {

    if (!images) {
      return 'assets/img/no-image.png';
    }
    if( images.length > 0 ){
      return images[0].url;
    }else{
      return 'assets/img/no-image.png';
    }
  }

}
