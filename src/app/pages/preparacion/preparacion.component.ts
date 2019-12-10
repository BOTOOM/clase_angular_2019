import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preparacion',
  templateUrl: './preparacion.component.html',
  styleUrls: ['./preparacion.component.scss']
})
export class PreparacionComponent implements OnInit {

  size:number = 40;
  alerta:string = 'alert-warning';
  alerta2:string = 'success';

  variableParaHijo = {
    mensaje: 'hola hijo habla el padre',
    cualquiernumero: 7
  };

  constructor() { }

  ngOnInit() {
  }

  imprimirDato(dato: any ) {
    console.log(dato)
  }

}
