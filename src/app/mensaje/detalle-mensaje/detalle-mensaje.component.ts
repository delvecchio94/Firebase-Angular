import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Observable } from 'rxjs/internal/Observable';

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
      this.servicio.consultarMensaje(this.id).subscribe((data: any) => {
        this.nombre = data.nombre
        this.correo = data.correo
        this.mensaje = data.mensaje
      });
    })
  }

  editarMensaje() {
    this.servicio.editarMensaje(this.id, {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    }).subscribe( data => {

    }, error => {
      console.log("no se pudo actualizar")
    })
      
  }
}

