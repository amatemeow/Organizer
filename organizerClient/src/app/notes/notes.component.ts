import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Folder } from '../entities/folder';
import { Note } from '../entities/note';
import { MessagesService } from '../messages.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  title = 'Notes'
  folders: Folder[] = [ { id: 'f1', title: 'My Folder Super Mega Giga Ultra', notes: [ { id: 'n1', title: 'Note 1', description: '123123123', important: false, modified: new Date() } ] } ];
  notes: Note[] = [ { id: 't1', title: 'Some cool note', description: 'I was on a really cool adventure last week and', important: false, modified: new Date() } ];

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

  toggleImportance(note: Note) {
    this.notes.find(v => v.id === note.id)!.important = !this.notes.find(v => v.id === note.id)!.important;
  }
}
