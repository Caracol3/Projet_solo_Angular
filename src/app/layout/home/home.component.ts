import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeDown', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  constructor(private router: Router) {}

  onScrollLinkClick(event: MouseEvent) {
    event.preventDefault();
    const scrollLink = event.currentTarget as HTMLElement;
    if (scrollLink) {
      this.router.navigateByUrl(scrollLink.getAttribute('routerLink') || '');
    }
  }
}




