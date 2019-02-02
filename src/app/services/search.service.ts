import {Inject, Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class SearchService {

  activeSearch: Subject<string>;
  searchInput: string;
  constructor() {
    this.activeSearch = new Subject();
    this.activeSearch.asObservable();
    this.searchInput = '';
  }

}
