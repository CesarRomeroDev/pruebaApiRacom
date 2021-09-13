import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'dispositivos',
    loadChildren: () => import('./dispositivos/dispositivos.module').then( m =>  m.DispositivosModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path:'**',
    redirectTo: '404'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
