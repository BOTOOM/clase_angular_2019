import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mostrar: boolean;
  numeros = []

  constructor(
    private router:Router,
  ) { 
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

  redirigir(grupo: number){
    console.info(grupo)
    this.router.navigate( ['/grupo_trabajo', grupo ] )
  }

}
