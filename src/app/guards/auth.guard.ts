import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Route, UrlSegment, CanMatchFn, CanActivate } from '@angular/router';

import { AuthService } from 'src/services/auth.service';
import { UsersService } from '../users/services/users.service';
import { FavoritesService } from '../films/services/favorites.service';
import { CommonService } from '../shared/common.service';


const checkAuthStatus = (): boolean => {
  const favoritesService: FavoritesService = inject(FavoritesService)
  const router: Router = inject(Router)
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

