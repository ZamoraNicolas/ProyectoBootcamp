import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  personas = [{
    nombre : "pedro",
    edad : 77,
    ciudad : "Valencia",
    documento : 1211313
  },
  {
    nombre : "Camila",
    edad : 21,
    ciudad : "Valencia",
    documento : 1211313
  },
  {
    nombre : "Juan",
    edad : 77,
    ciudad : "Murcia",
    documento : 1211313
  },
  {
    nombre : "Michael",
    edad : 31,
    ciudad : "Bogota",
    documento : 1211313
  },
  {
    nombre : "Nicolas",
    edad : 21,
    ciudad : "Madrid",
    documento : 1211313
  }]

  constructor(private router : Router){}

  cambioRuta(){
    this.router.navigateByUrl("listas");
  }

  AbrirModal(){
    Swal.fire({
      icon: "warning",
      title: "Algo paso",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
   }
}
