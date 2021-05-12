import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor( private http: HttpClient) { }
  
  obtenerMedicos() {
    return this.http.get('url');
  }

}
