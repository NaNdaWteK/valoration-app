import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export abstract class ProviderFunctions {

  constructor(public http: Http) {}

  saveField(url, body, options){
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
