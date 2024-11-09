import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidationHelper } from '../../../shared/helpers/validation.helper';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { first } from 'rxjs';
import { TokenResponseInterface } from '../../types/tokenResponse.interface';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rrp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isSomethingWrong = false;
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
    this.registerForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(ValidationHelper.emailWithDomainRegexPattern),
      ]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    };
    this.isRequestProcessing = true;
    this.authService
      .register(request)
      .pipe(first())
      .subscribe(
        (res: TokenResponseInterface) => {
          this.router.navigate(['/']);
        },
        (err) => {
          this.isRequestProcessing = false;
          this.isSomethingWrong = true;
        }
      );
  }
}
