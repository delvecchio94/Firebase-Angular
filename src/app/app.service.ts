import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  pathMensajes = "mensajes"
  pathUsuarios = "usuarios"

  constructor(private cliente : HttpClient) {
    
  }

  listar(){
    return this.cliente.get(`${environment.apiUrl}/${this.pathMensajes}`)
  }

  guardarMensaje(objeto: object) {
    return this.cliente.post(`${environment.apiUrl}/${this.pathMensajes}`,objeto)    
  }

  consultarMensaje(key: string){
    return this.cliente.get(`${environment.apiUrl}/${this.pathMensajes}/${key}`)
  }

  borrar(key: string) {
    return this.cliente.delete(`${environment.apiUrl}/${this.pathMensajes}/${key}`)
  }

  editarMensaje(key: string , objeto: object){
    return this.cliente.put(`${environment.apiUrl}/${this.pathMensajes}/${key}`,objeto)
  }

  autenticar(correo: string, pass: string){
    return this.cliente.post(`${environment.apiUrl}/${this.pathUsuarios}/login`,{correo: correo,clave: pass})
  }

  cerrarSesion(){
    
  }

  registrar(objeto: object){
    return this.cliente.post(`${environment.apiUrl}/${this.pathUsuarios}`,objeto)
  }

  recuperarContrasena(correo: string){
    
  }

  listarUsuarios(){
    return this.cliente.get(`${environment.apiUrl}/${this.pathUsuarios}`,{headers: new HttpHeaders({
      'Token':  localStorage.getItem("token")
    })})
  }
}
