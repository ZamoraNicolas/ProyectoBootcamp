import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { NuevoComponent } from './Pages/nuevo/nuevo.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { AcercaDeComponent } from './Pages/acerca-de/acerca-de.component';
import { HeaderComponent } from './shared/header/header.component';
import { PATH } from './core/enum/path.enum';
import { ListaComponent } from './Pages/lista/lista.component';
import { UsuariosComponent } from './Pages/usuarios/usuarios.component';
import { ProductosComponent } from './Pages/productos/productos.component';

export const routes: Routes = [
  {
    path: PATH.HOME,
    title: 'inicio',
    children: [
      {
        path: PATH.HOME,
        title: 'Home',
        component: InicioComponent,
      },
      {
        path: PATH.LISTA,
        title: 'List',
        component: ListaComponent,
      },
      {
        path: PATH.USUARIOS,
        title: 'Usuarios tabla',
        component: UsuariosComponent,
      },
      {
        path: PATH.NEW,
        title: 'New',
        component: NuevoComponent,
      }, {
        path: PATH.PRODUCTOS,
        title: 'Mis productos',
        component: ProductosComponent,
      },
      {
        path: PATH.CONTACT,
        title: 'Contact',
        component: ContactoComponent,
      },
      {
        path: PATH.ABOUT,
        title: 'About us',
        component: AcercaDeComponent,
      },
    ],
  },
];
