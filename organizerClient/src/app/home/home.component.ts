import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { format } from '../functions/format';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Home';
  today = Date.now();

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
    this.utcTime();
  }

  utcTime() {
    setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }
}
