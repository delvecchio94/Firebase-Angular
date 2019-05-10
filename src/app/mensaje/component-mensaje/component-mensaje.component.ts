import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material';
import { AppService } from 'src/app/app.service';

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

  imagePath: string;
  imgURL: string;
  message: string;
  mimeType: any;
  reader: any;

  constructor(private servicio: AppService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.mensajes = this.servicio.listar()
    this.iniciarVariables()
  }

  iniciarVariables(){
    this.nombre = ""
    this.correo = ""
    this.mensaje = "" 
    this.imgURL = null
  }

  enviarMensaje(){
    this.servicio.guardarMensaje({
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje,
      imagen: this.imgURL})
      this.iniciarVariables()
  }

  borrar(key: string) {
    this.servicio.borrar(key);
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }
    this.mimeType = files[0].type;
    if (this.mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    this.reader = new FileReader();
    this.imagePath = files;
    this.reader.readAsDataURL(files[0]);
    this.reader.onload = () => {
      this.imgURL = this.reader.result;
      this.openDialog()
    }
  }

  openDialog(): void {
    let ref = this.dialog.open(DialogoImagen, {
      height: '300px',
      disableClose: true,
      data: { imagen: this.imgURL }
    });
  }
  

}

@Component({
  selector: 'dialogo-imagen',
  templateUrl: 'dialogo-imagen.html',
})
export class DialogoImagen {

  public img: string
  constructor(
    public dialogRef: MatDialogRef<DialogoImagen>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.img = data.imagen
    }

  onClick(): void {
    this.dialogRef.close();
  }

}