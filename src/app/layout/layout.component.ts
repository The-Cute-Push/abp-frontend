import { Component } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, RouterModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  showSidebar = true;  // Controla se a sidebar será exibida

  constructor(public router: Router) {
    // Observar mudanças de navegação
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Esconde a sidebar se estiver na rota '/login' ou na rota raiz '/'
      this.showSidebar = !(this.router.url === '/login' || this.router.url === '/');
    });
  }
}
