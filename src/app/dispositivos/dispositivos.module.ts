import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { DispositivoComponent } from './pages/dispositivo/dispositivo.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { DispositivosRoutingModule } from './dispositivos-routing.module';
import { IdPipe } from './pipes/id.pipe';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    DispositivoComponent,
    HomeComponent,
    ListadoComponent,
    IdPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    DispositivosRoutingModule
  ]
})
export class DispositivosModule { }
