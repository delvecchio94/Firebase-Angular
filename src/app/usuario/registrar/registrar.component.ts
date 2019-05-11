import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  nombre: string
  correo: string
  pass: string
  passConf: string
  mensaje:string

  constructor(private servicio: AppService, public dialogRef: MatDialogRef<RegistrarComponent>) { }

  ngOnInit() {
  }
  
  iniciarVariables(){
    this.nombre = null
    this.correo = null
    this.pass = null
    this.passConf = null
  }

  registrar() {
    if (this.pass != this.passConf) {
      this.mensaje = "Las contraseñas no coinciden"
    }else{
      this.servicio.registrar(this.correo, this.pass).then(user => {
        this.dialogRef.close(true)
      }, error => {
        this.mensaje = "No se pudo crear el usuario"
      })
    }
  }


}
