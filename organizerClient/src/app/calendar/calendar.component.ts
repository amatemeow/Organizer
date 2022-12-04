import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  title = 'Calendar'

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
