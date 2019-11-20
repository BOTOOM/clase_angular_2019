import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  notaModel: number;

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }

  navegar() {
    console.info("entro")
    console.info(this.notaModel)
    this.router.navigate( ['/nota',this.notaModel] )
  }

}
