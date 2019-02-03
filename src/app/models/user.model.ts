export class UserModel {
  private _userID;
  private _email;
  private _password;

  constructor(userID: number, username: string, password: string) {
    this._userID = userID;
    this._email = username;
    this._password = password;
  }


  get userID() {
    return this._userID;
  }

  set userID(value) {
    this._userID = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }
}
