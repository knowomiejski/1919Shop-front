import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../models/user.model';
import {RegisterService} from '../../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user;
  email = '';
  passwd = '';
  province = '';
  city = '';
  street = '';
  housenr = 0;
  submitted = false;

  constructor(private registerService: RegisterService) { }

  ngOnInit() { }

  onClick() {
    this.user = new UserModel(this.email, this.passwd, this.province, this.city, this.street, this.housenr);
    this.registerService.registerUser(this.user);
    this.submitted = true;
  }
}
