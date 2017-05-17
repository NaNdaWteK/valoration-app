import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GroupServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GroupServiceProvider {

  constructor(public http: Http) {
    console.log('Hello GroupServiceProvider Provider');
  }

  save(group) {
      let headers    = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options    = new RequestOptions({ headers: headers });
      let body = `group=${group}`;
    return this.http.post('http://localhost:4567/add-group/save', body, options);
  }

}
