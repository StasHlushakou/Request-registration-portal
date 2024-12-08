import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestDTO } from '../../types/requestDTO.interface';
import { RequestService } from '../../../services/request.service';
import { first } from 'rxjs';

@Component({
  selector: 'rrp-view-request',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewRequestComponent implements OnInit {
  id!: string;
  request!: RequestDTO;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.loadData();
  }

  initializeValues(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
  }

  loadData(): void {
    if (this.id) {
      this.requestService
        .getRequestById(this.id)
        .pipe(first())
        .subscribe(
          (res: RequestDTO) => {
            this.request = res;
          },
          (err) => {
            console.log('error');
          }
        );
    }
  }

  update(id: string): void {
    this.router.navigate(['request', id, 'update']);
  }

  back(): void {
    this.router.navigate(['request']);
  }

  delete(id: string): void {
    this.requestService
      .deleteRequest(id)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(['request']);
        },
        (err) => {
          console.log('error');
        }
      );
  }
}
