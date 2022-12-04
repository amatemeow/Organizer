import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {
  title = 'Links'

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
