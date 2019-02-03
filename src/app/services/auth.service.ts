import {Injectable} from '@angular/core';
import {HttpClientService} from './http-client.service';
import {Router} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {UserModel} from '../models/user.model';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedInUser: UserModel;
  header: HeaderComponent;
  public isAdmin: boolean;
  public loggedin: boolean;


  constructor(private httpService: HttpClientService, private router: Router) {
  }

  public logInViaForm(user: UserModel) {
    this.httpService.logIn(user).subscribe((loggedIn: UserModel) => {
      this.loggedInUser = loggedIn;
      this.checkAuthorization(loggedIn);
      this.router.navigate(['/shop']);
      });
    log(this.loggedin);
    return this.loggedin;
  }

  public checkAuthorization(user: UserModel) {
    if (user.userID === 2) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
}
