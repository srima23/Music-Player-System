import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  title = "Bajatey Raho"

  constructor(public authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
