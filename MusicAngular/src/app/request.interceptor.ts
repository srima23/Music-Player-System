import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { EMPTY, Observable  } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const publicRequestUrl = [
      '/api/auth/*'  
    ]

    const isPublicRequest = publicRequestUrl.some(url => request.url.match(url)); 

    // dont intercept public requests
    if (isPublicRequest) {
      return next.handle(request);
    }

    // dont send request to server if not logged in
    if (!this.authService.isLoggedIn) {
      return EMPTY;
    }

    // add jwt token to request header after interceting a secure request and proceed
    const jwtTokenRequest = request.clone(
      {
        setHeaders: {
          Authorization: 'Bearer ' + this.authService.token
        }
      }
    );
    return next.handle(jwtTokenRequest);
  }
}
