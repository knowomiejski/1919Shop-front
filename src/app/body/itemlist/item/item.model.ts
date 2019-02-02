export class Item {
  public name: string;
  public desription: string;
  public price: number;
  public imgPath: string;
  constructor (name: string, description: string, price: number, imgPath: string) {
    this.name = name;
    this.desription = description;
    this.price = price;
    this.imgPath = imgPath;
  }
}
