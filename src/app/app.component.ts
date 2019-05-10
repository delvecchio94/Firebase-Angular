import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    if(localStorage.getItem("user")){
      this.estaAutenticado = true
    }
  }
  
  estaAutenticado:boolean = false;
  correo: string
  pass: string
  mensaje: string

  constructor(private servicio: AppService) {
  }

  autenticar(){
    this.mensaje = null
    this.servicio.autenticar(this.correo,this.pass).then(user => {
      localStorage.setItem("user",user.user.email)
      this.estaAutenticado = true
    },
    error => {
      this.mensaje = "Credenciales invalidas"
    })
    
  }
  
  cerrarSesion(){
    this.servicio.cerrarSesion().then(usr => {
      localStorage.removeItem("user")
      this.estaAutenticado = false
    })
  }
}