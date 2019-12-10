import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preparacion-hijo',
  templateUrl: './preparacion-hijo.component.html',
  styleUrls: ['./preparacion-hijo.component.scss']
})
export class PreparacionHijoComponent implements OnInit {

  @Input() datoDesdePadre: any = {};

  @Output() datoParaPadre: EventEmitter<any>;

  constructor() { 
    this.datoParaPadre = new EventEmitter();
  }

  ngOnInit() {
    console.log('variable que viene del padre');
    console.log(this.datoDesdePadre)
  }

  EnviarPadre() {
    const datoContruido = {
      mensaje: 'que onda viejo',
    };
    this.datoParaPadre.emit(datoContruido);
  }

}
