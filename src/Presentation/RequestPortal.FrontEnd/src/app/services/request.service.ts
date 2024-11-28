import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { RequestDTO } from '../request/types/requestDTO.interface';

@Injectable()
export class RequestService {
  constructor(private apiService: ApiService) {}

  public getRequests(): Observable<Array<RequestDTO>> {
    return this.apiService.get<Array<RequestDTO>>('Request');
  }

  public deleteRequest(id: string): Observable<void> {
    return this.apiService.delete<void>('Request/' + id);
  }
}
