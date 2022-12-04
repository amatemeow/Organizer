import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  title = 'Notes'

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
