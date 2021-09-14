import { Component, OnInit } from '@angular/core';
import { Dispositivo } from '../../interfaces/dispositivos.interface';
import { DispositivosService } from '../../services/dispositivos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})

export class AgregarComponent implements OnInit {

  dispositivo: Dispositivo = {
    nombre: '',
    serie: '',
    tipo: '',
    usuarioId: '',
  
  }
  constructor( private dispositivosService: DispositivosService ) { }

  ngOnInit(): void {
  }

  guardar(){
    // if( this.dispositivo.nombre.trim().length === 0 ) {
    //   return
    // }
    this.dispositivosService.agregarDispositivo( this.dispositivo )
        .subscribe( resp => {
          console.log('Respuesta', resp);
        } )
  }

}
