import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente [] = [{
    nombre: 'Alert',
    icono: 'american-football',
    url: '/alert'
  },
  {
    nombre: 'Action-Sheet',
    icono: 'appstore',
    url: '/action-sheet'
  },
  {
    nombre: 'Avatar y chip',
    icono: 'beaker',
    url: '/avatar'
  },
  {
    nombre: 'Fab',
    icono: 'planet',
    url: '/fab'
  },
  {
    nombre: 'Grid',
    icono: 'planet',
    url: '/grid'
  },
  {
    nombre: 'Infiniti scroll',
    icono: 'planet',
    url: '/infinity'
  },
  {
    nombre: 'Input and textarea',
    icono: 'planet',
    url: '/input'
  },
  {
    nombre: 'Menu',
    icono: 'planet',
    url: '/menu'
  },
  {
    nombre: 'Modal',
    icono: 'planet',
    url: '/modal'
  },
  {
    nombre: 'Nav',
    icono: 'planet',
    url: '/modal'
  },
  {
    nombre: 'Popover',
    icono: 'planet',
    url: '/popover'
  },
  {
    nombre: 'Loading',
    icono: 'planet',
    url: '/loading'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
interface Componente {
  nombre: string;
  icono: string;
  url: string;

}
