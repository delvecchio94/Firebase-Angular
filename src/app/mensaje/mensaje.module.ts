import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'

import { FormsModule } from "@angular/forms";
import { AppMaterialModule } from '../app-material/app-material.module';
import { AppRoutingModule } from '../app-routing.module';
import { environment } from './../../environments/environment';
import { MensajeRoutingModule } from './mensaje-routing.module';
import { ComponentMensajeComponent } from './component-mensaje/component-mensaje.component'

@NgModule({
  declarations: [ComponentMensajeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MensajeRoutingModule
  ]
})
export class MensajeModule { }
