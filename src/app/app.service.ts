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

  constructor(db: AngularFireDatabase,private auth: AngularFireAuth) {
    this.mensajesRef = db.list('MENSAJES');
  }

  listar(){
    return this.mensajesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
    );
  }

  enviarMensaje(objeto: object) {
    this.mensajesRef.push(objeto);
  }

  borrar(key: string) {
    this.mensajesRef.remove(key);
  }

  autenticar(correo: string, pass: string){
    return this.auth.auth.signInWithEmailAndPassword(correo,pass)
  }

  cerrarSesion(){
    return this.auth.auth.signOut()
  }
}
