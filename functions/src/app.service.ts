import {Injectable} from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';

const endpoint = 'https://www.gizmoserver-dev.eu-west-1.elasticbeanstalk.com';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AppService{

  constructor(private http: HttpClient){}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getData(Year: number) {
    return this.http.get(endpoint + '/api/values/' + Year).pipe(
      map(this.extractData));
  }
}
