import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {
  CreateRequestDTO,
  RequestDTO,
} from '../request/types/requestDTO.interface';

@Injectable()
export class RequestService {
  constructor(private apiService: ApiService) {}

  public getRequests(): Observable<Array<RequestDTO>> {
    return this.apiService.get<Array<RequestDTO>>('Request');
  }

  public getRequestById(id: string): Observable<RequestDTO> {
    return this.apiService.get<RequestDTO>('Request/' + id);
  }

  public deleteRequest(id: string): Observable<void> {
    return this.apiService.delete<void>('Request/' + id);
  }

  public createRequest(req: CreateRequestDTO): Observable<void> {
    return this.apiService.post<void>('Request', req);
  }

  public updateRequest(id: string, req: CreateRequestDTO): Observable<void> {
    return this.apiService.put<void>('Request' + id, req);
  }
}
