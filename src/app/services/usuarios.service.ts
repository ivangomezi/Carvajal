import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  Url = 'http://localhost:58624/';
  Api = 'api/Usuarios';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(this.Url + this.Api);
  }

  postUsuarios(data: Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>(this.Url + this.Api, data);
  }
}
