import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatDialog } from '@angular/material';
import { RegistrarComponent } from '../registrar/registrar.component';
import { RecuperarContrasenaComponent } from '../recuperar-contrasena/recuperar-contrasena.component';

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

  constructor(private servicio: AppService, private dialogo: MatDialog) { }

  ngOnInit() {
  }

  autenticar() {
    this.mensaje = null
    this.servicio.autenticar(this.correo, this.pass).subscribe( (resp : any) => {
      if(resp.success){
        localStorage.setItem("token", resp.token)
        this.logueado.emit(true)
      }else{
        this.mensaje = resp.message
      }
    },
      error => {
        this.mensaje = "Credenciales invalidas"
      })
  }


  abrirDialogo(dialogo: string) {
    if (dialogo === 'recuperarContrasena') {
      this.dialogo.open(RecuperarContrasenaComponent, {
        width: "400px"
      })
    } else if (dialogo === 'registrarUsuario') {
      const rc = this.dialogo.open(RegistrarComponent, {
        width: "400px"
      })
      rc.afterClosed().subscribe(logueado => {
        this.logueado.emit(logueado)
      });
    }
  }
}
