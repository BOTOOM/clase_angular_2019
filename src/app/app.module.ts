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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PruebaComponent,
    MiembrosComponent,
    CapitalizadoPipe,
    ContraseñaPipe
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
