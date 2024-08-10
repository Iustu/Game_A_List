import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // Verifique se a resposta é um HTTP 401 (Não Autorizado)
            if (event.status === 401) {
              this.removeStorage();
              this.router.navigate(['/login']);
            }
          }
        },
        (error: HttpErrorResponse) => {
          // Trate erros de resposta, se necessário
          if (error.status === 401) {
            this.removeStorage();
            this.router.navigate(['/login']);
          }
        }
      )
    );
  }

  removeStorage(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  }
}
