import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  title = 'Settings'

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
