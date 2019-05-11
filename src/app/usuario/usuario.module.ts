import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';

@NgModule({
  declarations: [LoginComponent, RegistrarComponent, RecuperarContrasenaComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    AppMaterialModule,
    FormsModule
  ],
  exports: [LoginComponent],
  entryComponents : [RegistrarComponent,RecuperarContrasenaComponent]
})
export class UsuarioModule { }
