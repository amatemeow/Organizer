import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessagesService } from '../messages.service';
import { Location } from '@angular/common';
import { Folder } from '../entities/folder';
import { SearchService } from '../search.service';
import { Task } from '../entities/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  title = 'Tasks'
  folders: Folder[] = [ { id: 'f1', title: 'My Folder Super Mega Giga Ultra', notes: [ { id: 'n1', title: 'Note 1', description: '123123123', important: false, modified: new Date() } ] } ];
  tasks: Task[] = [ { id: 't1', title: 'Very important task', description: 'Better do it now!', muted: false, done: false, modified: new Date(), alarmBefore: 0, targetDate: new Date() } ];

  constructor(
    private titleService: Title,
    private messageService: MessagesService,
    private location: Location,
    public search: SearchService) {
      this.titleService.setTitle(this.title);
      this.applySearch();
  }

  ngOnInit() {
    this.messageService.set({ 'text': 'Successfully routed to Tasks!'});
  }

  goBack() {
    this.location.back();
  }

  applySearch() {
    console.log(this.search.searchText);
    if (this.search.searchText) {
      this.folders.filter(v => v.title.toLowerCase().indexOf(this.search.searchText.toLowerCase()) > -1);
    }
  }

  toggleMute(task: Task) {
    this.tasks.find(v => v.id === task.id)!.muted = !this.tasks.find(v => v.id === task.id)!.muted;
  }
}
