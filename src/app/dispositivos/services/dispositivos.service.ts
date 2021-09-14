import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dispositivo } from '../interfaces/dispositivos.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DispositivosService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  getDispositivos(): Observable<Dispositivo[]> {
    return this.http.get<Dispositivo[]>(`${ this.baseUrl }/dispositivos`);
  }

  getDispositivoPorId( id: string ):Observable<Dispositivo> {
    return this.http.get<Dispositivo>(`${ this.baseUrl }/dispositivos/${ id }`);
  }

  agregarDispositivo( dispositivo: Dispositivo ): Observable<Dispositivo> {
    return this.http.post<Dispositivo>(`${ this.baseUrl }/dispositivos`, dispositivo);
  }
}
