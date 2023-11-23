import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'La Fabrique à idées';
  showHeader = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !(event.url === '/' || event.url === '/home');

        
        const scrollLink = document.querySelector(".scroll-link");
        if (scrollLink) {
          scrollLink.classList.remove("clicked");
        }
      }
    });
  }
}
