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
  ActualizarDispositivo( dispositivo: Dispositivo ): Observable<Dispositivo> {
    return this.http.put<Dispositivo>(`${ this.baseUrl }/dispositivos/${ dispositivo.id }`, dispositivo);
  }

  borrarDispositivo( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/dispositivos/${ id }`);
  }
}

//oservable : Es aquello que queremos observar, que será implementado mediante una colección de eventos o valores futuros. Un observable puede ser creado a partir de eventos de usuario derivados del uso de un formulario, una llamada HTTP, un almacén de datos, etc.