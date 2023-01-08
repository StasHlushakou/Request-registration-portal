import { Component, Inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Request } from '../model/request';
import { Observable } from 'rxjs';

@Injectable()
export class RequestService extends ApiService{

  public getRequests(): Observable<Request[]> {
    return this.get<Request[]>(`request`);
  }

  public getRequestById(requestId: string): Observable<Request> {
    return this.get<Request>(`request`, { requestId: requestId });
  }

  public addRequest(request: Request): Observable<void> {
    return this.post<void>(`request`, { request: request });
  }

  public updateRequest(useId: string, request: Request): Observable<void> {
    return this.put<void>(`request`, { userId: useId, request: request });
  }

  public deleteRequest(requestId: string): Observable<void> {
    return this.delete<void>(`request`, { requestId: requestId });
  }

}
