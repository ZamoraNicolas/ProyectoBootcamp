import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { TablaComponent } from "../../components/tabla/tabla.component";
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-lista',
    standalone: true,
    templateUrl: './lista.component.html',
    styleUrl: './lista.component.css',
    imports: [RouterLink, TablaComponent,DatePipe]
})

export class ListaComponent implements OnInit {
  persona : PersonaInterface[] = [];
  columnas : string[] = [
  "nombre",
  "fechaNacimiento",
  "peso",
  "tipoDocumento",
  "numeroDocumento",
  "numeroCelular",
  "email"];

  ngOnInit(): void {
      this.persona =[
        {
        nombre: "Juan",
        fechaNacimiento : new Date("2023-02-12"),
        peso : "72",
        tipoDocumento : "cc",
        numeroDocumento : "1231313",
        numeroCelular : 1231312,
        email : "Juan@gmail.com"
      },
      {
        nombre: "Maria",
        fechaNacimiento : new Date("2023-12-12"),
        peso : "12",
        tipoDocumento : "cc",
        numeroDocumento : "313132",
        numeroCelular : 7891312,
        email : "Maria@gmail.com"
      },
      {
        nombre: "Andres",
        fechaNacimiento : new Date("2023-01-12"),
        peso : "30",
        tipoDocumento : "cc",
        numeroDocumento : "3331221",
        numeroCelular : 908012,
        email : "Andres@gmail.com"
      },
      {
        nombre: "Juan",
        fechaNacimiento : new Date("2023-02-12"),
        peso : "72",
        tipoDocumento : "cc",
        numeroDocumento : "1231313",
        numeroCelular : 1231312,
        email : "Juan@gmail.com"
      },
    ];
    console.log(this.persona)
  }
}

