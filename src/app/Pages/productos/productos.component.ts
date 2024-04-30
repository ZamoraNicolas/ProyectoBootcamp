import { Component, OnInit } from '@angular/core';
import { ProductoInterface } from '../../core/interface/producto.interface';
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
    selector: 'app-productos',
    standalone: true,
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.css',
    imports: [TablaComponent]
})
export class ProductosComponent implements OnInit {

  columnas : string[] = [
    "nombre",
    "sku",
    "cantidad",
    "precio"];

  misProductos :  ProductoInterface[] = [];

  ngOnInit(): void {
    this.misProductos = [
      {
      nombre: 'Pantalon',
      sku: '3122',
      cantidad: 12,
      precio: 50000
    },
    {
      nombre: 'Camisa',
      sku: '31221',
      cantidad: 21,
      precio: 70000
    },
    {
      nombre: 'Chaqueta',
      sku: '90921',
      cantidad: 10,
      precio: 30000
    }
  ]
  }

}
