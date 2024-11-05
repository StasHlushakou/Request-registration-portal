import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { ValidationHelper } from '../../../shared/helpers/validation.helper';

@Component({
  selector: 'rrp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  static readonly emailWithDomainRegexPattern: RegExp =
    /^[\p{L}\p{N}._%+'’-]+@[\p{L}\p{N}.-]+\.[\p{L}]{2,4}$/u;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.pattern(ValidationHelper.emailWithDomainRegexPattern),
      ]),
      password: new FormControl(''),
    });
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
  }
}
