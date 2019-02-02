import { Component, OnInit } from '@angular/core';
import {CredentialsModel} from '../../../models/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credentials: CredentialsModel;
  private login = '';
  private passwd = '';

  constructor() { }

  ngOnInit() {
  }

  onClickLogin() {
    this.credentials = new CredentialsModel(this.login, this.passwd);
  }

}
