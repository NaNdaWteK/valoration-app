import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ElementServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ElementServiceProvider Provider');
  }

  save(element) {
      let headers    = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options    = new RequestOptions({ headers: headers });
      let body = `element=${element}`;
    return this.http.post('http://localhost:4567/elements/save', body, options);
  }

}
