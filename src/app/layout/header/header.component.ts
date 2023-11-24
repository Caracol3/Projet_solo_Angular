import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sidebarVisible: boolean = false;

  settings: MenuItem[] = [
    {
      label: 'Mon compte',
      icon: 'pi pi-fw pi-users',
      routerLink: '/family/1',
    }
  ];

  constructor(private router: Router) {}

  closeSidebar(){
    this.sidebarVisible = false;
  }
}
