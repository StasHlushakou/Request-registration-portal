import { Injectable, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from './api.service';
import { PersistanceService } from './persistance.service';
import { LoginRequestInterface } from '../auth/types/loginRequest.interface';
import { TokenResponseInterface } from '../auth/types/tokenResponse.interface';
import { RegisterRequestInterface } from '../auth/types/registerRequest.interface';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated = false;
  constructor(
    private apiService: ApiService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {
    if (this.persistanceService.get('accessToken')) {
      this.isAuthenticated = true;
    }
  }

  public login(
    request: LoginRequestInterface
  ): Observable<TokenResponseInterface> {
    return this.apiService
      .post<TokenResponseInterface>('auth/login', request)
      .pipe(
        map((response: TokenResponseInterface) => {
          this.persistanceService.set('accessToken', response.token);
          this.isAuthenticated = true;
          return response;
        })
      );
  }

  public register(
    request: RegisterRequestInterface
  ): Observable<TokenResponseInterface> {
    return this.apiService
      .post<TokenResponseInterface>('auth/register', request)
      .pipe(
        map((response: TokenResponseInterface) => {
          this.persistanceService.set('accessToken', response.token);
          this.isAuthenticated = true;
          return response;
        })
      );
  }

  public logout(): Observable<void> {
    return this.apiService.post<void>('auth/logout', {}).pipe(
      map(() => {
        this.persistanceService.set('accessToken', '');
        this.isAuthenticated = false;
      })
    );
  }

  public unauthorized(): void {
    this.persistanceService.set('accessToken', '');
    this.isAuthenticated = false;
    this.router.navigate(['login']);
  }
}
