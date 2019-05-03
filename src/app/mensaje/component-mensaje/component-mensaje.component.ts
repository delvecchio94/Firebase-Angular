import { Component, OnInit } from '@angular/core';
import { ServiceMensajeService } from './../service-mensaje.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-component-mensaje',
  templateUrl: './component-mensaje.component.html',
  styleUrls: ['./component-mensaje.component.scss']
})
export class ComponentMensajeComponent implements OnInit {

  mensajes: Observable<any[]>
  nombre:string
  correo:string
  mensaje:string

  constructor(private servicio: ServiceMensajeService) { }

  ngOnInit() {
    this.mensajes = this.servicio.listar()
  }

  enviarMensaje(){
    this.servicio.enviarMensaje(this.nombre,this.correo,this.mensaje)
    this.nombre = ""
    this.correo = ""
    this.mensaje = ""  
  }

  borrar(key: string) {
    this.servicio.borrar(key);
  }

}
