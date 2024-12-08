import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../../services/request.service';
import { CreateRequestDTO } from '../../types/requestDTO.interface';
import { first } from 'rxjs';

@Component({
  selector: 'rrp-create-request',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateRequestComponent implements OnInit {
  requestForm!: FormGroup;
  isSomethingWrong = false;
  isRequestProcessing = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private requestService: RequestService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.requestForm = this.fb.group({
      theme: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
    });
  }

  onSubmit(): void {
    const request: CreateRequestDTO = {
      theme: this.requestForm.value.theme,
      description: this.requestForm.value.description,
    };
    this.isRequestProcessing = true;
    this.requestService
      .createRequest(request)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['request']);
        },
        (err) => {
          this.isRequestProcessing = false;
          this.isSomethingWrong = true;
        }
      );
  }

  back(): void {
    this.router.navigate(['request']);
  }
}
