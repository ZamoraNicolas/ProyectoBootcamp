import { Component, OnInit } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { DatePipe } from '@angular/common';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [DatePipe,TablaComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  columnas : string[] = [
    "nombre",
    "fechaNacimiento",
    "peso",
    "tipoDocumento",
    "numeroDocumento",
    "numeroCelular",
    "email"];


  usuarios : PersonaInterface[]=[];
  ngOnInit(): void {
    this.usuarios = [{
      nombre: 'Camila',
      fechaNacimiento: new Date("2002-12-02"),
      tipoDocumento: 'CC',
      numeroDocumento: '10111010100',
      numeroCelular: 213132,
      email: 'Camila@gmail.com',
      peso: "80"
    },
    {
      nombre: 'Juan',
      fechaNacimiento: new Date("1990-12-02"),
      tipoDocumento: 'CC',
      numeroDocumento: '3123132112',
      numeroCelular: 7321312,
      email: 'Juan@gmail.com',
      peso: "80"
    },
  ]
  }
}
