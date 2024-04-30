import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { DatePipe } from '@angular/common';
import { ProductoInterface } from '../../core/interface/producto.interface';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [TablaComponent, DatePipe],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit {

@Input() data : any[] = [];

@Input() personas : PersonaInterface[] = [];
@Input() titulo : string = "";
@Input() columnas : string[] = [];

@Output() onInformacion: EventEmitter<any> = new EventEmitter<any>();

ngOnInit(): void {
  this.columnas.push("Acciones");
}

enviarInformacion(data:any){
  //Emito el evento con la informacion de data
  console.log("Data componente hijo",data)
this.onInformacion.emit(data);
}

}
