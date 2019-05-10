import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentMensajeComponent } from './component-mensaje/component-mensaje.component'
import { DetalleMensajeComponent } from './detalle-mensaje/detalle-mensaje.component';

const routes: Routes = [{
  path: 'mensaje',
  component: ComponentMensajeComponent,
  children: [
    {
      path: 'detalles/:id',
      component: DetalleMensajeComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MensajeRoutingModule { }
