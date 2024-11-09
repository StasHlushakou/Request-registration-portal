import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { ValidationHelper } from '../../../shared/helpers/validation.helper';
import { TokenResponseInterface } from '../../types/tokenResponse.interface';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'rrp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isPasswordInvalid = false;
  isRequestProcessing = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(ValidationHelper.emailWithDomainRegexPattern),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      login: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.isRequestProcessing = true;
    this.authService
      .login(request)
      .pipe(first())
      .subscribe(
        (res: TokenResponseInterface) => {
          this.router.navigate(['/']);
        },
        (err) => {
          this.isPasswordInvalid = true;
          this.isRequestProcessing = false;
        }
      );
  }
}
