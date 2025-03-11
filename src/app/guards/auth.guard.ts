import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Route, UrlSegment, CanMatchFn } from '@angular/router';

import { AuthService } from 'src/services/auth.service';
import { UsersService } from '../users/services/users.service';

const checkAuthStatus = (): boolean => {
  const usersService: UsersService = inject(UsersService)
  const router: Router = inject(Router)

  usersService.onExisteUsuario(localStorage.getItem('token') ? localStorage.getItem('token')! : "");
  let existeUser = usersService.existeUser;
  if(!localStorage.getItem('token')){
    router.navigate(['/'])
  }
  return true;
}



export const canActivateGuard: CanActivateFn = ( //tipado CanActivate
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
)=>{

  return checkAuthStatus();
}

export const canMatchGuard: CanMatchFn = ( //tipado CanMatchFN
  route: Route,
  segments: UrlSegment[]
)=>{

  return checkAuthStatus();
}


