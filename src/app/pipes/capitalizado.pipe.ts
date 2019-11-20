import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string): string {
    value = value.toLowerCase();
    let nombres = value.split(" ");
    console.info(nombres)
    for (let i = 0; i < nombres.length; i++) {
      nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1)
    }
    return nombres.join(" ");
  }

}
