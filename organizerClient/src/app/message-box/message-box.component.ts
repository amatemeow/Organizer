import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {

  constructor(public messageService: MessagesService) {}
}
