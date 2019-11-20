import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-grupo-especifico',
  templateUrl: './grupo-especifico.component.html',
  styleUrls: ['./grupo-especifico.component.scss']
})
export class GrupoEspecificoComponent implements OnInit {

  valorRecibido: any;

  constructor(
    private activatedRoute:ActivatedRoute,
  ) { 
    this.activatedRoute.params.subscribe( parametros => {
      console.info(parametros)
      this.valorRecibido = parametros['numero'];
      console.info(this.valorRecibido)
      console.info( Number(this.valorRecibido) )

    } )
  }

  ngOnInit() {
  }

}
