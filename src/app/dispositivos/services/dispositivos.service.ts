import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivos.interface';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {

  constructor( private http: HttpClient) { }

  getDispositivos(): Observable<Dispositivo[]> {
    return this.http.get<Dispositivo[]>('http://localhost:3000/dispositivos');
  }
}
