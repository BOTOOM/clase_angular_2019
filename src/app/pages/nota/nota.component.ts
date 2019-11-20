import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.scss']
})
export class NotaComponent implements OnInit {

  idnota: any;

  constructor(
    private activatedRoute:ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.idnota =params['id'];
      console.log(params['id'])
    } )
   }

  ngOnInit() {
  }

}
