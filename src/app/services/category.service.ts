import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  activeCategory: Subject<string>;
  categorySelected: string;

  constructor() {
    this.activeCategory = new Subject();
    this.activeCategory.asObservable();
    this.categorySelected = '';
  }
}
