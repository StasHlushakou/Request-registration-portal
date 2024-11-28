import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rrp-update-request',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateRequestComponent implements OnInit {
  id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.id = this.route.snapshot.paramMap.get('slug');
  }
}
