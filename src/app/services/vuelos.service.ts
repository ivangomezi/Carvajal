import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Vuelos } from '../models/vuelos';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {
  Url = 'http://localhost:58624/';
  Api = 'api/Vuelos';

  constructor(private http: HttpClient) { }

  getVuelos(): Observable<any> {
    return this.http.get(this.Url + this.Api);
  }

  getVuelosID(id: any): Observable<any> {
    return this.http.get(this.Url + this.Api + '/' + id);
  }

  postVuelos(datavuelos: Vuelos): Observable<Vuelos>{
    return this.http.post<Vuelos>(this.Url + this.Api, datavuelos);
  }

  putVuelos(id: any, datavuelos: Vuelos) : Observable<Vuelos> {
    return this.http.put<Vuelos>(this.Url + this.Api + '/' + id, datavuelos);
  }

  deleteVuelos(id: any): Observable<Vuelos>{
    return this.http.delete<Vuelos>(this.Url + this.Api + '/' + id);
  }
}
