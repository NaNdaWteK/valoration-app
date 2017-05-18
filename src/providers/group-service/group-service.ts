import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

/*
  Generated class for the GroupServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GroupServiceProvider {

    private url: string = 'http://localhost:4567/';

    constructor(private http: Http) {
        //console.log('Hello GroupServiceProvider Provider');
    }

  save(group) {
      let url = this.url + 'add-group/save';
      let headers    = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options    = new RequestOptions({ headers: headers });
      let body = `group=${group}`;
      return this.http.post( url, body, options )
                      .do( this._doResponse )
                      .map( this._resultResponse )
                      .catch( this._errorMessage );
  }

  private _doResponse( res: Response) {
      //console.log(res);
  }

  private _resultResponse( res: Response ) {
      return res.json();
  }

  private _errorMessage( error: Response ) {
      return Observable.throw( error.json().error || 'Server error' );
  }

}
