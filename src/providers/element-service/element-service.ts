import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProviderFunctions } from '../../app/providers';


@Injectable()
export class ElementServiceProvider extends ProviderFunctions{
    private url: string = 'http://localhost:4567/';
    constructor(public http: Http) {
        super(http);
    }

  save(element) {
      let url = this.url + 'elements/save';
      let headers    = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options    = new RequestOptions({ headers: headers });
      let body = `element=${element}`;
      return this.saveField(url,body,options);
  }

}
