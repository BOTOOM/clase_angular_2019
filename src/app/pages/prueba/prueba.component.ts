import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  TextoQueCambia: string;

  constructor() { }

  ngOnInit() {
  }

  mostrarTexto() {
    console.info(this.TextoQueCambia);
  }

}
