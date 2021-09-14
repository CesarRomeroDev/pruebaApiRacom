import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { DispositivosService } from '../../services/dispositivos.service';
import { Dispositivo } from '../../interfaces/dispositivos.interface';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styles: [
  ]
})
export class DispositivoComponent implements OnInit {

  dispositivo!: Dispositivo

  constructor( private activateRoute: ActivatedRoute,
               private dispositivosService: DispositivosService ) { }

  ngOnInit(): void {

    this.activateRoute.params
        .pipe(
          switchMap( ({ id }) => this.dispositivosService.getDispositivoPorId( id ) )
        )
        .subscribe( dispositivo => this.dispositivo = dispositivo );

  }

}
