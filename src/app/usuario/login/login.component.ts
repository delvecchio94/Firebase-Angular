import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() logueado: EventEmitter<boolean> = new EventEmitter()

  correo: string
  pass: string
  mensaje: string

  constructor(private servicio: AppService) { }

  ngOnInit() {
  }

  autenticar(){
    this.mensaje = null
    this.servicio.autenticar(this.correo,this.pass).then(user => {
      localStorage.setItem("user",user.user.email)
      this.logueado.emit(true)
    },
    error => {
      this.mensaje = "Credenciales invalidas"
    })
    
  }

}
