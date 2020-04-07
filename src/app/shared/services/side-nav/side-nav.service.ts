import { Injectable } from '@angular/core';

interface MenuNode {
  name: string;
  url?: string,
  children?: MenuNode[];
}


@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  menu: MenuNode[] = [
    {
      name: 'TUS PRODUCTOS',
      url: '/products',
    },
    {
      name: 'TU ORGANIZADOR',
      url: '/',
    },
    {
      name: 'PAGOS',
      url: '/',
    },
    {
      name: 'TRANSFERENCIAS',
      url: '/',

    },
    {
      name: 'CERTIFICADOS',
      url: '/',

    },
    {
      name: 'SEGURIDAD',
      url: '/',
    },
  ];

  constructor() { }
}
