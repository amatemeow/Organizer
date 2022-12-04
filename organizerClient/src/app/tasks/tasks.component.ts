import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessagesService } from '../messages.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  title = 'Tasks'

  constructor(
    private titleService: Title,
    private messageService: MessagesService,
    private location: Location) {
      this.titleService.setTitle(this.title);
  }

  ngOnInit() {
    this.messageService.set({ 'text': 'Successfully routed to Tasks!'});
  }

  goBack() {
    this.location.back();
  }
}
