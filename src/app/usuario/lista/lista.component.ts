import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[]
  constructor(public servicio: AppService) { }

  ngOnInit() {
    this.servicio.listarUsuarios().subscribe( usuarios => {
      this.usuarios = usuarios as Usuario[]
      this.usuarios.forEach(element => {
        console.log(element.nombre);
      });
    })
    
  }

}
