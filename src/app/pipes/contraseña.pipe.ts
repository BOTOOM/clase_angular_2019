import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContraseñaPipe implements PipeTransform {

  transform(value: string, oculto: boolean = true ): string {
    let password = value;
    if (oculto) {
      password = '';
      for (let i = 0; i < value.length; i++) {
        password = password + "*";
      }
    }
    return password;
  }

}
