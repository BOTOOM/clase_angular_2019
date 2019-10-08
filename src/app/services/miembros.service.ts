import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

const urlmiembros = `./assets/files/`;

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

  constructor(private http: HttpClient) { 
    console.info("localjson funcionando");
  }

  get(endpoint: string) {
    return this.http.get(`${urlmiembros}${endpoint}.json`)
  }

}
