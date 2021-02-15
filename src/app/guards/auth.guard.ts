import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/restservices/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private authService: AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      

    const currentUser  = JSON.parse(sessionStorage.getItem('CURRENT_USER'));
    if (currentUser) {
      // check if route is restricted by role
      if (next.data.roles && next.data.roles.indexOf(currentUser.role) === -1) {
          // role not authorised so redirect to home page
          this.router.navigate(['/']);         
          return false;
      }

      // authorised so return true
      return true;
    }
    this.router.navigate(['/']);
    return this.authService.isLoggedIn();
  }
}
