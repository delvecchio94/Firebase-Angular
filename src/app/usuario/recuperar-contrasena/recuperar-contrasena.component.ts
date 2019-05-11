import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.scss']
})
export class RecuperarContrasenaComponent implements OnInit {

  correo: string

  constructor(private servicio: AppService, public dialogRef: MatDialogRef<RecuperarContrasenaComponent>) { }

  ngOnInit() {
  }

  recuperarContrasena(){
    this.servicio.recuperarContrasena(this.correo).then(user => {
      this.dialogRef.close()
    })
  }
}
