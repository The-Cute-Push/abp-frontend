import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarOpen = false;
  currentRoute = '';
  noSidebarRoutes = ['/login', '/auth/login']; // ajuste conforme sua rota

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
        // Fecha sidebar caso esteja numa rota sem sidebar
        if (this.isNoSidebarRoute()) {
          this.sidebarOpen = false;
        }
      });
  }

  isNoSidebarRoute(): boolean {
    return this.noSidebarRoutes.some(route => this.currentRoute.startsWith(route));
  }

  toggleSidebar() {
    // Só alterna se NÃO estiver numa rota bloqueada
    if (!this.isNoSidebarRoute()) {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
}
