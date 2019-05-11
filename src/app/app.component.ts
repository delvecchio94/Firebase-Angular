import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.estaAutenticado = true
    }
  }
  
  estaAutenticado:boolean = false;

  constructor(private servicio: AppService, private router: Router) {
  }

  autenticar(autenticado: boolean){
    this.estaAutenticado = autenticado
  }
  
  cerrarSesion(){
    this.servicio.cerrarSesion().then(usr => {
      localStorage.removeItem("user")
      this.estaAutenticado = false
    })
  }
}