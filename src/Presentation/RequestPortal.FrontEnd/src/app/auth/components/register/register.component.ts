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
  selector: 'rrp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

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
    this.registerForm = this.fb.group({
      email: new FormControl('', [
        Validators.pattern(ValidationHelper.emailWithDomainRegexPattern),
      ]),
      password: new FormControl(''),
    });
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    };
  }
}
