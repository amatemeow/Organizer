import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  searchText: string = '';

  constructor(private search: SearchService) {
    this.search.searchText = this.searchText;
  }
}
