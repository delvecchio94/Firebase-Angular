import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-detalle-mensaje',
  templateUrl: './detalle-mensaje.component.html',
  styleUrls: ['./detalle-mensaje.component.scss']
})
export class DetalleMensajeComponent implements OnInit {

  id: string
  nombre: string
  correo: string
  mensaje: string

  constructor(private router: ActivatedRoute,
    private servicio: AppService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params.id
      this.servicio.consultarMensaje(this.id).on("value", (mensaje) => {
        this.nombre = mensaje.val().nombre
        this.correo = mensaje.val().correo
        this.mensaje = mensaje.val().mensaje
      })
    })
  }

  editarMensaje() {
    this.servicio.editarMensaje(this.id, {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    }).then(
    error => {
      console.log("no se pudo actualizar")
    })
  }
}

