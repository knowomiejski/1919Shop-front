import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  createAuthenticationHeader(user: UserModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(user.email + ':' + user.password)
      })
    };
    return httpOptions;
  }

    logIn(user: UserModel) {
    const urlPath = this.url + '/user/login';
    const httpOptions = this.createAuthenticationHeader(user);
    return this.http.post<UserModel>(urlPath, user, httpOptions);
  }

}
