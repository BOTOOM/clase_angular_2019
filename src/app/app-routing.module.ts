import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';
import { NotaComponent } from './pages/nota/nota.component';
import { GrupoEspecificoComponent } from './pages/grupo-especifico/grupo-especifico.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'prueba', component: PruebaComponent },
    { path: 'miembros', component: MiembrosComponent },
  //   { path: 'artist/:id', component: ArtistaComponent },
    { path: 'nota/:id', component: NotaComponent },
    { path: 'grupo_trabajo/:numero', component: GrupoEspecificoComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },	
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
