import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProviderFunctions } from '../../app/providers';


@Injectable()
export class GroupServiceProvider extends ProviderFunctions{
    private url: string = 'http://localhost:4567/';
    constructor(public http: Http) {
        super(http);
    }

  save(group) {
      let url = this.url + 'add-group/save';
      let headers    = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options    = new RequestOptions({ headers: headers });
      let body = `group=${group}`;
      return this.saveField(url,body,options);
  }

}
