import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../../services/request.service';
import { CreateRequestDTO, RequestDTO } from '../../types/requestDTO.interface';
import { first } from 'rxjs';

@Component({
  selector: 'rrp-update-request',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateRequestComponent implements OnInit {
  id!: string;
  request!: RequestDTO;

  requestForm!: FormGroup;
  isSomethingWrong = false;
  isRequestProcessing = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private requestService: RequestService
  ) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.loadData();
  }

  loadData(): void {
    if (this.id) {
      this.requestService
        .getRequestById(this.id)
        .pipe(first())
        .subscribe(
          (res: RequestDTO) => {
            this.request = res;
            this.initializeForm();
          },
          (err) => {
            console.log('error');
          }
        );
    }
  }

  initializeForm(): void {
    this.requestForm = this.fb.group({
      theme: new FormControl(this.request.theme, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
      description: new FormControl(this.request.description, [
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
      .updateRequest(this.id, request)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        (err) => {
          this.isRequestProcessing = false;
          this.isSomethingWrong = true;
        }
      );
  }

  back(): void {
    this.router.navigate(['']);
  }
}
