import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { flatMap, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  api_url:string = environment.api_url;

  constructor(
    private http: HttpClient,
  ) {}

  get(url: string): Observable<any> {

    return this.http.get(this.api_url+url)
      .pipe(
        catchError(error => {
          return this.handleError(error);
        })
      );
  };

  private handleError(error: HttpErrorResponse) {

    let errorMessage = 'Something bad happened; please try again later.';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    let error_response:Observable<any> = throwError(new Error(errorMessage));

    return error_response;
  };

}
