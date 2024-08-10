import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http: HttpClient = inject(HttpClient);

    constructor () { }

    findMe() {
      return this.http.get<User>(environment.apiUrl + '/users/my');
    }

    create(obj: User){
      return this.http.post<User>(environment.apiUrl + '/users', obj);
    }

    update(User: User) {
      return this.http.put<User>(environment.apiUrl + '/users', User);
    }
  }

