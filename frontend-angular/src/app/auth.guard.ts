import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    // Verificar si hay un token en localStorage
    const token = localStorage.getItem('id');
    
    // Si no hay token, redirigir al login
    if (!token) {
      this.router.navigate(['/login']); // Redirige a la página de login
      return false;
    }

    // Si hay token, permitir el acceso a la ruta
    return true;
  }
}
