import { Component, OnInit } from '@angular/core';
import { Dispositivo } from '../../interfaces/dispositivos.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})

export class AgregarComponent implements OnInit {

  dispositivo: Dispositivo = {
    id:'',
    nombre: '',
    serie: '',
    tipo: '',
    usuarioId: '',
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
