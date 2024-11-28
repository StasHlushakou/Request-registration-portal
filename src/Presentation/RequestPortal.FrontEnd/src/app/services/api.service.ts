import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(
    protected http: HttpClient,
    protected injector: Injector
  ) {}

  private buildUrl(url: string): string {
    return 'http://localhost:4201/api/' + url;
  }

  private handleErrors(err: HttpErrorResponse) {
    const router = this.injector.get(Router);

    // The 401 (Unauthorized) status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.
    if (err.status === 401) {
      router.navigate(['login']);
    }

    // The 403 Forbidden Error is an HTTP response status code that indicates an identified client does not have proper authorization to access the requested content.
    if (err.status === 403) {
      console.log('403');
    }

    if (err.status === 404) {
      console.log('403');
    }

    if (err.status === 500) {
      console.log('500');
    }
  }

  public get<T>(
    url: string,
    request: any = {},
    options: any = {}
  ): Observable<T> {
    request.rnd = new Date().getTime();
    return this.http
      .get<T>(this.buildUrl(url), {
        responseType: options.responseType || 'json',
        params: request,
        withCredentials: true,
      })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err: HttpErrorResponse) => {
          if (!options.ignoreErrors) {
            this.handleErrors(err);
          }
          return throwError(err);
        })
      );
  }

  public post<T>(url: string, request: any, options: any = {}): Observable<T> {
    return this.http
      .post<T>(this.buildUrl(url), request, {
        responseType: options.responseType || 'json',
        withCredentials: true,
      })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err: HttpErrorResponse) => {
          if (!options.ignoreErrors) {
            this.handleErrors(err);
          }
          return throwError(err);
        })
      );
  }

  public put<T>(url: string, request: any, options: any = {}): Observable<T> {
    return this.http
      .put<T>(this.buildUrl(url), request, {
        responseType: options.responseType || 'json',
        withCredentials: true,
      })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err: HttpErrorResponse) => {
          if (!options.ignoreErrors) {
            this.handleErrors(err);
          }
          return throwError(err);
        })
      );
  }

  public delete<T>(
    url: string,
    request: any = {},
    options: any = {}
  ): Observable<T> {
    return this.http
      .delete<T>(this.buildUrl(url), {
        responseType: options.responseType || 'json',
        params: request,
        withCredentials: true,
      })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err: HttpErrorResponse) => {
          if (!options.ignoreErrors) {
            this.handleErrors(err);
          }
          return throwError(err);
        })
      );
  }
}
