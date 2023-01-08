import { Component, Inject, Injectable, Injector, Optional, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class ApiService {
  constructor(
    protected http: HttpClient,
    @Inject('BASE_URL') protected baseUrl: string,
    protected injector: Injector,
    protected translate: TranslateService,
  ) {
  }

  private buildUrl(url: string): string {
    return this.baseUrl + url;
  }


  private handleErrors(err: any) {

    console.log('ERROR');

    /*
    this.httpStatusCodeService.setStatusCode(err.status);
    const router = this.injector.get(Router);
    const toastr = this.injector.get(ToastrService);
    const translate = this.injector.get(TranslateService);

    if (err.status === 401 || err.status === 403) {

      // The 401 (Unauthorized) status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.
      if (err.status === 401) {
        this.sessionService.logout();

        // console.log('handleErrors(401) - router.url', router.url);
        // router.navigate([this.sessionService.language, 'auth', 'login']);
        router.navigate([this.sessionService.language, 'auth', 'login'], { queryParams: { returnUrl: router.url } });
      }

      // The 403 Forbidden Error is an HTTP response status code that indicates an identified client does not have proper authorization to access the requested content.
      if (err.status === 403) {
        // router.navigate(['/' + this.sessionService.language, 'error', 403, router.url]);
      }

      toastr.info(
        translate.instant('AUTH.MODAL.PAGE_ISNT_AVAILABLE.MESSAGE'),
        translate.instant('AUTH.MODAL.PAGE_ISNT_AVAILABLE.TITLE'),
        { timeOut: 10000 }
      );
    }

    if (err.status === 404) {
      if (!router.url.toLowerCase().startsWith('/' + this.sessionService.language + '/error/404')) {
        router.navigate(['/' + this.sessionService.language, 'error', 404, router.url]);
      }
    }

    if (err.status === 412 && err.error.message === 'EnterpriseNotSelected' && this.sessionService.hasPermission(Permission.DefaultSuperAdmin)) {
      if (!router.url.toLowerCase().includes('/multi/list')) {
        router.navigate(['/' + this.sessionService.language, 'multi', 'list'], { queryParams: { returnUrl: router.url } });
      }
    }*/
    
  }


  private buildHeaders(options: any): HttpHeaders {
    const headersConfig: any = {
      'Accept-Language': 'en'
    };
    return new HttpHeaders(headersConfig);
  }

  protected get<T>(url: string, request: any = {}, options: any = { noSpinner: true }): Observable<T> {
    return this.http.get<T>(this.buildUrl(url), {
      headers: this.buildHeaders(options),
      responseType: options.responseType || 'json',
      params: request,
      withCredentials: true
    }).pipe(
      map((response) => {
        return response;
      }),
      catchError((err: HttpErrorResponse) => {
        if (!options.ignoreErrors) {
          this.handleErrors(err);
        }
        return observableThrowError(err);
      })
    );
  }


  protected post<T>(url: string, request: any, options: any = {}): Observable<T> {
    let repostProgressOption = {};
    if (options.reportProgress === true) {
      repostProgressOption = {
        reportProgress: true,
        observe: 'events'
      };
    }
    return this.http.post<T>(this.buildUrl(url), request, {
      headers: this.buildHeaders(options),
      responseType: options.responseType || 'json',
      withCredentials: true,
      ...repostProgressOption
    }).pipe(map((response) => {
      return response;
    }), catchError((err: HttpErrorResponse) => {
      if (!options.ignoreErrors) {
        this.handleErrors(err);
      }
      return observableThrowError(err);
    }));
  }

  protected put<T>(url: string, request: any, options: any = {}): Observable<T> {
    return this.http.put<T>(this.buildUrl(url), request, {
      headers: this.buildHeaders(options),
      responseType: options.responseType || 'json',
      withCredentials: true
    }).pipe(map((response) => {
      return response;
    }), catchError((err: HttpErrorResponse) => {
      if (!options.ignoreErrors) {
        this.handleErrors(err);
      }
      return observableThrowError(err);
    }));
  }

  protected delete<T>(url: string, request: any, options: any = {}): Observable<T> {
    return this.http.delete<T>(this.buildUrl(url), {
      headers: this.buildHeaders(options),
      responseType: options.responseType || 'json',
      params: request,
      withCredentials: true
    }).pipe(map((response) => {
      return response;
    }), catchError((err: HttpErrorResponse) => {
      if (!options.ignoreErrors) {
        this.handleErrors(err);
      }
      return observableThrowError(err);
    }));
  }




}

