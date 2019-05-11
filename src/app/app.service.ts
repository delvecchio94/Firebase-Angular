import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  mensajesRef: AngularFireList<any>
  LISTA_FIREBASE = "MENSAJES"

  constructor(private db: AngularFireDatabase,private auth: AngularFireAuth) {
    this.mensajesRef = db.list(this.LISTA_FIREBASE);
  }

  listar(){
    return this.mensajesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
    );
  }

  guardarMensaje(objeto: object) {
    this.mensajesRef.push(objeto);
  }

  consultarMensaje(key: string){
    return this.db.database.ref(this.LISTA_FIREBASE).child(key)
  }

  borrar(key: string) {
    this.mensajesRef.remove(key);
  }

  editarMensaje(key: string , objeto: object){
    return this.mensajesRef.update(key,objeto)
  }

  autenticar(correo: string, pass: string){
    return this.auth.auth.signInWithEmailAndPassword(correo,pass)
  }

  cerrarSesion(){
    return this.auth.auth.signOut()
  }

  registrar(correo: string, pass: string){
    return this.auth.auth.createUserWithEmailAndPassword(correo,pass)
  }

  recuperarContrasena(correo: string){
    return this.auth.auth.sendPasswordResetEmail(correo)
  }
}
