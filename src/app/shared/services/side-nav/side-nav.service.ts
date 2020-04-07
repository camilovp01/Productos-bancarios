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
      url: '/organizer',
    },
    {
      name: 'PAGOS',
      url: '/payments',
    },
    {
      name: 'TRANSFERENCIAS',
      url: '/transfers',

    },
    {
      name: 'CERTIFICADOS',
      url: '/certificates',

    },
    {
      name: 'SEGURIDAD',
      url: '/security',
    },
  ];

  constructor() { }
}
