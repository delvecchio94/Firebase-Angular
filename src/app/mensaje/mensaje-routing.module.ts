import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentMensajeComponent } from './component-mensaje/component-mensaje.component'

const routes: Routes = [{
  path: 'mensaje',
  component: ComponentMensajeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MensajeRoutingModule { }
