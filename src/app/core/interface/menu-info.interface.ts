export interface MenuInfoInterface{
  path:string
  tittle:string,
  icon?:string,
  classCSS?:string,
  submenu?:MenuInfoInterface[];
}
