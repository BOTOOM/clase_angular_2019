import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clase-hijo',
  templateUrl: './clase-hijo.component.html',
  styleUrls: ['./clase-hijo.component.scss']
})
export class ClaseHijoComponent implements OnInit {

  @Input() DatoRecividoPadre: any;
  @Output() DatoParaPadre: EventEmitter<any>;
  @Output() VISTA: EventEmitter<any>;

  constructor() {
    this.DatoParaPadre = new EventEmitter();
    this.VISTA = new EventEmitter();
   }

  ngOnInit() {
    console.log('datos recibidos del padre');
    console.log(this.DatoRecividoPadre);
  }

  EnviarPadre() {
    const datoContruido = {
      mensaje: 'que onda viejo',
    };
    this.DatoParaPadre.emit(datoContruido);
    this.VISTA.emit(datoContruido);

  }
}
