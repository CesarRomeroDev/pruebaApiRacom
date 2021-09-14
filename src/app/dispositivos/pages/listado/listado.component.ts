import { Component, OnInit } from '@angular/core';
import { DispositivosService } from '../../services/dispositivos.service';
import { Dispositivo } from '../../interfaces/dispositivos.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  dispositivos: Dispositivo[] = [];

  constructor( private dispositivosService: DispositivosService) { }

  ngOnInit(): void {

    this.dispositivosService.getDispositivos()
        .subscribe( dispositivo => this.dispositivos = dispositivo );
  }

}
