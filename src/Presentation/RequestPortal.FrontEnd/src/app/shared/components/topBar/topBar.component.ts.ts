import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription, first } from 'rxjs';

@Component({
  selector: 'rrp-topBar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent {
  constructor(
    private translate: TranslateService,
    private authService: AuthService,
    private router: Router
  ) {}

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  logout(): void {
    this.authService
      .logout()
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['/auth/login']);
        },
        (err) => {
          console.log('error on logout');
        }
      );
  }
}
