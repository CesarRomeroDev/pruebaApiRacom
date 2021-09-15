import { Component, OnInit } from '@angular/core';
import { Dispositivo } from '../../interfaces/dispositivos.interface';
import { DispositivosService } from '../../services/dispositivos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
  constructor( private dispositivosService: DispositivosService,
               private activatedRoute: ActivatedRoute,              //editar
               private router: Router ) { }                          //editar

  ngOnInit(): void {


    this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => this.dispositivosService.getDispositivoPorId( id ) )   //editar
        )
        .subscribe( dispositivo => this.dispositivo = dispositivo);                     //editar: nuestro ngModel esta asiciado a nuestros dispositivos por eso es que carga la informacion

  }

  guardar(){
    if( this.dispositivo.nombre.trim().length === 0 ) {
      return
    }

    if (this.dispositivo.id){
      //editar 
      this.dispositivosService.ActualizarDispositivo( this.dispositivo )                //editar
          .subscribe( dispositivo => {
            console.log('Actualizado', dispositivo)
            this.router.navigate([ '/dispositivos/listado' ])                           //editar
          } );
    }else{
      //Agregar
      this.dispositivosService.agregarDispositivo( this.dispositivo )
      .subscribe( dispositivo => {
        this.router.navigate([ '/dispositivos/listado', dispositivo.id ]);
      } )
    }
  }

}
