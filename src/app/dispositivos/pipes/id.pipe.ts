import { Pipe, PipeTransform } from '@angular/core';
import { Dispositivo } from '../interfaces/dispositivos.interface';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

  transform(dispositivo: Dispositivo ): string {
    //console.log( dispositivo );
    return `${ dispositivo.id }`;
  }

}
