import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable({ providedIn: 'root' })
export class GuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.hasPermission(route, state);
  }

  private hasPermission(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const sba = !!route.data['shouldBeAuthenticated'];
    const ia = this.authService.isAuthenticated;

    if ((sba && ia) || (!sba && !ia)) {
      return true;
    }

    if (sba && !ia) {
      this.router.navigate(['auth', 'login']);
    }

    if (!sba && ia) {
      this.router.navigate(['request']);
    }

    return false;
  }
}
