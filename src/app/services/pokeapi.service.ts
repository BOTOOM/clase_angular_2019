import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

const urlmiembros = `https://pokeapi.co/api/v2/`;


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) {
    console.info("localjson funcionando");
   }


  get(endpoint: string) {
    return this.http.get(`${urlmiembros}${endpoint}`)
  }
}
