import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rrp-view-request',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewRequestComponent implements OnInit {
  id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.id = this.route.snapshot.paramMap.get('slug');
  }
}
