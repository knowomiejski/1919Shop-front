import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../models/user.model';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: UserModel;
  private login = '';
  private passwd = '';
  private clicked = false;

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  onClickLogin() {
    this.clicked = true;
    this.user = new UserModel(-99, this.login, this.passwd);
    this.authservice.logInViaForm(this.user);
  }
}
