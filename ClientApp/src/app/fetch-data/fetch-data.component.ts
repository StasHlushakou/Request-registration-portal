import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../services/request.service';
import { Request } from '../model/request';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public requests: Request[] = [];

  constructor(
    private requestService: RequestService) {
    this.initRequests();
  }

  initRequests() {
    this.requestService.getRequests().subscribe(res => {
      this.requests = res;
    }, err => console.error(err));
  }

}
