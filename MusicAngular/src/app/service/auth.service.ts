import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../models/login-form';
import { LocalStorageService } from './local-storage.service';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$: boolean = false;
  authUrl = 'http://localhost:8080/api/auth/token';

  constructor(private http: HttpClient, private storage: LocalStorageService, private router: Router) {
    this._isLoggedIn$ = !!this.storage.get('token');
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn$;
  }

  login(userCred: LoginForm): Observable<User> {
    return this.http.post<User>(this.authUrl, userCred).pipe(
      tap(res => {
        this._isLoggedIn$ = true;
        this.storage.set('token', res.token);
        this.router.navigate(['/cycles']);
      }),
    );
  }

  get token(): string | null {
    return this.storage.get('token')
  }

  logout(): void {
    this.storage.remove('token');
    this._isLoggedIn$ = false;
    this.router.navigate(['/login']);
  }

  isUserAdmin(): boolean {
    if (!this._isLoggedIn$) return false;
    const token = this.storage.get('token');
    const payload = token?.split('.')[1];
    const decodedPayload: Record<string, string> = JSON.parse(atob(payload as string));
    return decodedPayload['scope'] === 'ROLE_ADMIN';
  }

  getUsername(): string {
    if (!this._isLoggedIn$) return 'anonymous';
    const token = this.storage.get('token');
    const payload = token?.split('.')[1];
    const decodedPayload: Record<string, string> = JSON.parse(atob(payload as string));
    return decodedPayload['sub'];
  }
}
