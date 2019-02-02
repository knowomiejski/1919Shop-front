import {Component, OnInit} from '@angular/core';
import {Item} from './item/item.model';
import {SearchService} from '../../services/search.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  searchinput = '';
  displayeditems;
  shopitems: Item[] = [
    new Item('Electric 1', 'newest Electric 1', 399, '/assets/img/categories/electric.png'),
    new Item('Acoustic 1', 'newest Acoustic 1', 599, '/assets/img/categories/acoustic.png'),
    new Item('Headphone 1', 'newest Headphones 1', 199, '/assets/img/categories/headphones.png')
  ];

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.displayeditems = this.shopitems;
    this.searchService.activeSearch.subscribe( (searchInput: string)  => {
      this.searchinput = searchInput;
      this.updateItems();
    });
  }

  public updateItems() {
    if (this.searchinput !== '') {
    this.displayeditems = this.shopitems.filter(product => product.name.toLowerCase().includes(this.searchinput.toLowerCase()));
    } else {
      this.displayeditems = this.shopitems;
    }
  }
}
