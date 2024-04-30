import { PATH } from "../core/enum/path.enum";
import { MenuInfoInterface } from "../core/interface/menu-info.interface";

export const MenuRoutes : MenuInfoInterface[] = [
  {
    path : PATH.HOME,
    tittle : 'Home',
    icon : "fa-solid fa-house",
    classCSS : "",
    submenu : [],
  },
  {
    path : PATH.LISTA,
    tittle : 'List',
    icon : "",
    classCSS : "",
    submenu : [
      {
        path : PATH.NEW,
        tittle : 'New',
        icon : "",
        classCSS : "",
        submenu : []
      },
    ]
  },
  {
    path : PATH.CONTACT,
    tittle : 'Contact',
    icon : "",
    classCSS : "",
    submenu : []
  },
  {
    path : PATH.USUARIOS,
    tittle : 'Tabla usuarios',
    icon : "",
    classCSS : "",
    submenu : []
  },
  {
    path : PATH.ABOUT,
    tittle : 'About us',
    icon : "",
    classCSS : "",
    submenu : []
   },
   {
    path : PATH.PRODUCTOS,
    tittle : 'Productos',
    icon : "",
    classCSS : "",
    submenu : []
   },

];
