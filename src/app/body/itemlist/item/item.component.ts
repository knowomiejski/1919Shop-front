import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Item} from './item.model';
import {ItemlistComponent} from '../itemlist.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('product')
  item: ItemComponent;

  constructor(private _sanitizer: DomSanitizer) {

  }

  ngOnInit() {
  }

}
