import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mostrar: boolean;
  numeros = []

  constructor() { 
    this.mostrar = false;
    this.repetir();
  }

  ngOnInit() {
  }

  repetir() {
    for (let index = 0; index < 11; index++) {
      this.numeros.push(index);
    }
    console.info(this.numeros)
  }

  pruebita() {
    console.info('entro a la funcion');
    this.mostrar = !this.mostrar;
    console.info(this.mostrar)
  }

}
