import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'

import { FormsModule } from "@angular/forms";
import { AppMaterialModule } from '../app-material/app-material.module';
import { AppRoutingModule } from '../app-routing.module';
import { MensajeRoutingModule } from './mensaje-routing.module';
import { ComponentMensajeComponent, DialogoImagen } from './component-mensaje/component-mensaje.component';
import { DetalleMensajeComponent } from './detalle-mensaje/detalle-mensaje.component'

@NgModule({
  declarations: [ComponentMensajeComponent,DialogoImagen, DetalleMensajeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    MensajeRoutingModule
  ],
  entryComponents : [DialogoImagen]
})
export class MensajeModule { }
