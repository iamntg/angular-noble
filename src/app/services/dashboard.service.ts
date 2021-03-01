import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "./_httpclient.service";

import { environment } from 'src/environments/environment';


@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getCustomers() {
    return new Observable(observer => {
      this.http
        .get(`${environment.customerURL}/all`)
        .subscribe(response => {
          observer.next(response);
          observer.complete();
        }, err => {
          observer.next(err);
          observer.complete();
        })
    });
  }

}