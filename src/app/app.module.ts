import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';


// componentes 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ContraseñaPipe } from './pipes/contraseña.pipe';
import { NotaComponent } from './pages/nota/nota.component';
import { GrupoEspecificoComponent } from './pages/grupo-especifico/grupo-especifico.component';
import { PreparacionComponent } from './pages/preparacion/preparacion.component';
import { PreparacionHijoComponent } from './components/preparacion-hijo/preparacion-hijo.component';
import { ClaseComponent } from './pages/clase/clase.component';
import { ClaseHijoComponent } from './components/clase-hijo/clase-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PruebaComponent,
    MiembrosComponent,
    CapitalizadoPipe,
    ContraseñaPipe,
    NotaComponent,
    GrupoEspecificoComponent,
    PreparacionComponent,
    PreparacionHijoComponent,
    ClaseComponent,
    ClaseHijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
