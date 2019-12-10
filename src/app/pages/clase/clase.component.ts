import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss']
})
export class ClaseComponent implements OnInit {

  mostrar = true;
  size: number = 30;
  alerta:string = 'alert-success';
  condicion = 'no se que hacer con mi vinda :v';

  variableParaHijo = {
    mensaje: 'hola hijo habla el padre',
    cualquiernumero: 7
  };

  constructor() { }

  ngOnInit() {
  }

  imprimirInfo(dato: any) {
    console.log(dato);
  }

  vista(dato: any) {
    this.mostrar = !this.mostrar;
    this.alerta = 'alert-danger';
  }
}
