import { Component, OnInit } from '@angular/core';
import { MiembrosService } from '../../services/miembros.service';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.scss']
})
export class MiembrosComponent implements OnInit {

  Datosmiembros: any;

  constructor(
    private miembos: MiembrosService,
  ) { 
    this.miembos.get('miembros').subscribe( dato => {
      // console.log(dato);
      this.Datosmiembros = dato;
      console.info(this.Datosmiembros)
    }, (error_service) => {
      console.log(error_service);
    });


  }

  ngOnInit() {
  }

}
