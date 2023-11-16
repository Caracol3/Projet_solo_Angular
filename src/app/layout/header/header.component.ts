import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  items: MenuItem[] = [
    {
        label: 'Activités manuelles',
        icon: 'pi pi-fw pi-check',
        command: () => {

        }
    },
    {
        label: 'Coloriage',
        icon: 'pi pi-fw pi-times',
        command: () => {

        }
    },
    {
        label: 'Activités plein air',
        icon: 'pi pi-fw pi-check',
        command: () => {

        }
    },
    {
        label: 'Motricité',
        icon: 'pi pi-fw pi-times',
        command: () => {

        }
    },
    {
        label: 'Contes',
        icon: 'pi pi-fw pi-check',
        command: () => {

        }
    },
    {
        label: 'Jeux de société',
        icon: 'pi pi-fw pi-times',
        command: () => {

        }
    }

];


}
