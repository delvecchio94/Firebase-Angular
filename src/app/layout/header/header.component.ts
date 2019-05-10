import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() estaAutenticado: boolean;

  @Output() logoutEvent: EventEmitter<any> = new EventEmitter()
  
  constructor(private servicio: AppService) { }

  ngOnInit() {
  }
  

  cerrarSesion(){
    this.logoutEvent.emit();
  }

}
