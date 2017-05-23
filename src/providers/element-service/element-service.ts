import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProviderFunctions } from '../../app/providers';
import { EnvVariables } from '../../app/environment-variables/environment-variables.token';

@Injectable()
export class ElementServiceProvider extends ProviderFunctions{
    constructor(public http: Http,
                @Inject(EnvVariables) private envVariables) 
    {
        super(http);
    }

  save(element) {
      let url = this.envVariables.baseUrl + 'elements/save';
      let headers    = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options    = new RequestOptions({ headers: headers });
      let body = `element=${element}`;
      return this.saveField(url,body,options);
  }

  list(group_id) {
      let url = this.envVariables.baseUrl + 'elements/list/' + group_id;
      let headers    = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options    = new RequestOptions({ headers: headers });
      let body = '';
      return this.retrieveList(url,body,options);
  }

}
