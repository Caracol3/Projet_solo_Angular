import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  activities: MenuItem[] = [
    {
      label: 'Activités manuelles',
      icon: 'pi pi-angle-right',
      command: () => {},
    },
    {
      label: 'Coloriage',
      icon: 'pi pi-angle-right',
      command: () => {},
    },
    {
      label: 'Activités plein air',
      icon: 'pi pi-angle-right',
      command: () => {},
    },
    {
      label: 'Motricité',
      icon: 'pi pi-angle-right',
      command: () => {},
    },
    {
      label: 'Contes',
      icon: 'pi pi-angle-right',
      command: () => {},
    },
    {
      label: 'Jeux de société',
      icon: 'pi pi-angle-right',
      command: () => {},
    },
  ];

  settings: MenuItem[] = [
    {
      label: 'Mon compte',
      icon: 'pi pi-fw pi-users',
      command: () => {},
    },
    {
      label: 'Paramètres',
      icon: 'pi pi-fw pi-cog',
      command: () => {},
    },
    {
      label: 'Déconnexion',
      icon: 'pi pi-fw pi-sign-out',
      command: () => {},
    },
  ];

  constructor() {}
}
