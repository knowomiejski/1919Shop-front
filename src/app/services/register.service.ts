import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  registerUser( userModel: UserModel) {
    return this.http.post(this.url + '/settings', userModel);
  }
}
