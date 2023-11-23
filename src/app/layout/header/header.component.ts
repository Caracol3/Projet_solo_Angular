import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {



  activities: MenuItem[] = [

    {
      label: 'Accueil',
      icon: 'pi pi-angle-right',
      routerLink: 'home'

    },
    {
      label: 'Activités manuelles',
      icon: 'pi pi-angle-right',
      routerLink: '/activities/1'

    },
    {
      label: 'Coloriage',
      icon: 'pi pi-angle-right',
      routerLink: '/activities/3'    },
    {
      label: 'Activités plein air',
      icon: 'pi pi-angle-right',
      routerLink: '/activities/2'    },
    {
      label: 'Motricité',
      icon: 'pi pi-angle-right',
      routerLink: '/activities/4'    },
    {
      label: 'Contes',
      icon: 'pi pi-angle-right',
      routerLink: '/activities/5'    },
    {
      label: 'Jeux de société',
      icon: 'pi pi-angle-right',
      routerLink: '/activities/6'    },
  ];

  settings: MenuItem[] = [
    {
      label: 'Mon compte',
      icon: 'pi pi-fw pi-users',
      routerLink: '/family/1'    },
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

  constructor(private router: Router) {}
}
