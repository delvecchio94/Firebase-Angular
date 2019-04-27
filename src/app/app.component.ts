import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mensajes: Observable<any[]>
  db:AngularFireDatabase
  usuario:string
  mensaje:string

  constructor(db:AngularFireDatabase){
    this.db = db
    this.mensajes = db.list('MENSAJES').valueChanges();
  }

  enviarMensaje() {
    this.db.database.ref('MENSAJES').child(this.mensaje).set({
      usuario : this.usuario,
      mensaje : this.mensaje
    });
  }

}