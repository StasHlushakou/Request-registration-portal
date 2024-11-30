import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../services/request.service';
import { RequestDTO } from '../../types/requestDTO.interface';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'rrp-request-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class RequestListComponent implements OnInit {
  requests!: Array<RequestDTO>;
  constructor(
    private requestService: RequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.requestService
      .getRequests()
      .pipe(first())
      .subscribe(
        (res: Array<RequestDTO>) => {
          this.requests = res;
        },
        (err) => {
          console.log('error');
        }
      );
  }

  create(): void {
    this.router.navigate(['create']);
  }

  update(id: string): void {
    this.router.navigate([id, 'update']);
  }

  view(id: string): void {
    this.router.navigate([id]);
  }

  delete(id: string): void {
    this.requestService
      .deleteRequest(id)
      .pipe(first())
      .subscribe(
        () => {
          this.loadData();
        },
        (err) => {
          console.log('error');
        }
      );
  }
}
