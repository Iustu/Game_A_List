import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const accessToken: any = localStorage.getItem('accessToken');

      request = request.clone({
          setHeaders: {
              Authorization: `Bearer ` + accessToken,
          }
      });

      return next.handle(request);

    }
}
