import { throwError as observableThrowError, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient as Http, HttpHeaders } from '@angular/common/http';
import { catchError, finalize, map } from 'rxjs/operators'

@Injectable()
export class HttpClientService {
  constructor(private http: Http) {
  }

  setTokenHeader(headers: HttpHeaders) {
    headers.append('Accept', ' application/json');
    // TODO: replace the below token fetching from wherever you store the token(PS:I am using local storage here)
    headers.append('Authorization', ' Bearer ' + localStorage.getItem('token'));
  }

  get(url: string, spinner?: boolean) {
    //OPTIONAL: show spinner if needed
    let headers = new HttpHeaders();
    this.setTokenHeader(headers);
    return this.http.get(url, {
      headers: headers
    })
      .pipe(
        catchError(err => {
          return observableThrowError(err);
        }),
        finalize(() => {
          //OPTIONAL: stop spinner
        })
      )
  }

  post(url: string, data: any, spinner?) {
    //OPTIONAL: show spinner if needed
    let headers = new HttpHeaders();
    if (localStorage.getItem('token')) {
      this.setTokenHeader(headers);
    }
    return this.http.post(url, data, {
      headers: headers
    })
      .pipe(
        catchError(error => {
          return error;
        }),
        finalize(() => {
          //OPTIONAL: stop spinner if started before
        })
      )
  }

  delete(url: string, spinner?) {
    //OPTIONAL: show spinner if needed
    let headers = new HttpHeaders();
    this.setTokenHeader(headers);
    return this.http.delete(url, { headers: headers })
      .pipe(
        catchError(error => {
          return error;
        }),
        finalize(() => {
          //OPTIONAL: stop spinner if started before
        })
      )
  }

  put(url: string, data: any, spinner?) {
    //OPTIONAL: show spinner if needed
    let headers = new HttpHeaders();
    this.setTokenHeader(headers);
    return this.http.put(url, data, {
      headers: headers
    })
      .pipe(
        catchError(error => {
          return error;
        }),
        finalize(() => {
          //OPTIONAL: stop spinner if started before
        })
      )
  }
}
