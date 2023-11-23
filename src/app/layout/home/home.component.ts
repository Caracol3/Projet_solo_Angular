import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  onScrollLinkClick(event: MouseEvent) {
    event.preventDefault();

    const scrollLink = event.currentTarget as HTMLElement;

    if (scrollLink) {
      scrollLink.classList.add("clicked");

      setTimeout(() => {
        const routerLink = scrollLink.getAttribute("routerLink");
        if (routerLink) {
          this.router.navigateByUrl(routerLink);
        }
      }, 50); // Attendre 50 millisecondes avant la redirection
    }
  }
}

