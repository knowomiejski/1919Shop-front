import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {log} from 'util';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchbar = '';
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  public onInput() {
    this.searchService.activeSearch.next(this.searchbar);
  }
}
