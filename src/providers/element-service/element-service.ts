import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ElementServiceProvider {
    private url: string = 'http://localhost:4567/';
  constructor(private http: Http) {
      //console.log('Hello ElementServiceProvider Provider');
  }

  save(element) {
      let url = this.url + 'elements/save';
      let headers    = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options    = new RequestOptions({ headers: headers });
      let body = `element=${element}`;
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
