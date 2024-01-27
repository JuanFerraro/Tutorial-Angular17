import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiFriends } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  private _http = inject(HttpClient);
  private urlBase: string = 'https://jsonplaceholder.typicode.com/users';

  getFriends():Observable<ApiFriends[]>{
    return this._http.get<ApiFriends[]>(this.urlBase)
  };

}
