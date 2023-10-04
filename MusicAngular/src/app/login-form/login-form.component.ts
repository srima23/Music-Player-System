import { Component } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';
import { AuthService } from '../service/auth.service';
import { LoginForm } from '../models/login-form';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {

  constructor(private authService: AuthService) { }

  login(loginForm: any): void {
    if (loginForm.invalid) return;
    this.authService.login(loginForm.value as LoginForm).subscribe();
  }

}
