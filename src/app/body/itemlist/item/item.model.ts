import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

export class Item {
  private _name: string;
  private _desription: string;
  private _price: number;
  private _imgPath: SafeResourceUrl;

  constructor(name: string, description: string, price: number, imgPath: SafeResourceUrl) {
    this._name = name;
    this._desription = description;
    this._price = price;
    this._imgPath = imgPath;

  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get desription(): string {
    return this._desription;
  }

  set desription(value: string) {
    this._desription = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get imgPath(): SafeResourceUrl {
    return this._imgPath;
  }

  set imgPath(value: SafeResourceUrl) {
    this._imgPath = value;
  }
}
