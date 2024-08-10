import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export function authGuard(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const router: Router = inject(Router);
    let retorno = true;
    const accessToken: any = localStorage.getItem('accessToken');
    const userStr: any = localStorage.getItem('user');

    if(!accessToken || !userStr){
      retorno = false;
    }

    const user = JSON.parse(userStr);

    if(!user){
      retorno = false;
    }
    
    if (retorno) {
      return true;
    }else{
      router.navigate(['/login']);
      return false;
    }
}

