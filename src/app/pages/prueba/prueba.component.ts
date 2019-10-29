import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  TextoQueCambia: string;
  Nombre = 'Fulanito de Tal';
  fecha = '21-10-2019';
  euler = 2.71828182846;
  iva = 0.1879;
  valor_chocorramo = 34365652190.8;
  nickname = "igOr mClaVEn soY yo";
  password = `t]3cT{dRgP@?8^J`;
  oculto = true;

  fecha_hoy = new Date();
  

  constructor(
    private pokeRequest: PokeapiService,
  ) { 
    this.pokeRequest.get(`pokemon`).subscribe(respuesta => {
      console.log(respuesta)
    }, (error) => {
      console.log(error)
    } );
  }

  ngOnInit() {
  }

  mostrarTexto() {
    console.info(this.TextoQueCambia);
    let pokemon = this.TextoQueCambia;
    const path = `pokemon`;
    this.pokeRequest.get(`${path}/${pokemon}`).subscribe(respuesta => {
      console.log(respuesta)
    }, (error) => {
      console.log(error)
    } );
  }

}
