export class RegistrationModel {

  passwd: string;
  email: string;
  province: string;
  city: string;
  street: string;
  housenr: number;

  constructor(email: string, passwd: string, province: string, city: string, street: string, housenr: number) {
    this.passwd = passwd;
    this.email = email;
    this.province = province;
    this.city = city;
    this.street = street;
    this.housenr = housenr;
  }
}
