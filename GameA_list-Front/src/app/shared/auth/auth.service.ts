import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from 'src/app/modules/user/user.model';
import { environment } from './../../../environments/environment';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http: HttpClient = inject(HttpClient);

    constructor (private router: Router) { }

    callLogin(obj: Login){
      return this.http.post<any>(environment.apiUrl + '/user/login', obj);
    }

    callLoginJWT(){
      return this.http.post<any>(environment.apiUrl + '/user/loginJWT', {});
    }

    changePassword(obj: any){
      return this.http.put<any>(environment.apiUrl + '/auth/new-password', obj);
    }

    passwordRecovery(obj: any){
      return this.http.post<any>(environment.apiUrl + '/auth/passwordRecovery', obj);
    }

    login(obj: Login): Observable<string> {
      return this.callLogin(obj).pipe(
        map((res: any) => {
          const accessToken = res.senha;
          res.senha = null;
          localStorage.setItem('user', JSON.stringify(res));
          localStorage.setItem('userId', res.idUsuario);
          localStorage.setItem('accessToken', accessToken);
          return 'Login com sucesso';
        }),
        catchError((error) => {
          console.error('Erro ao fazer login:', error);
          return throwError('Erro ao fazer login');
        })
      );
    }

    loginJWT(): Observable<string> {
      return this.callLoginJWT().pipe(
        map((res: any) => {
          const accessToken = res.senha;
          res.senha = null;
          localStorage.setItem('user', JSON.stringify(res));
          localStorage.setItem('accessToken', accessToken);
          return 'Login com sucesso';
        }),
        catchError((error) => {
          console.error('Erro ao fazer login:', error);
          return throwError('Erro ao fazer login');
        })
      );
    }


    loggout() {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }

  }

