import { Component, Input } from '@angular/core';
import { Filter } from '../entities/filter';
import { Filters } from '../entities/filters';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() filters = Filters;
}
