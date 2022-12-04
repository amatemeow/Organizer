import { Injectable } from '@angular/core';
import { Message } from './entities/message';
import { sleep } from './functions/sleep';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message?: Message = { text: '' };
  display = false;

  constructor() { }

  async set(message: Message) {
    this.display = false;
    await sleep(100);
    this.message = message;
    this.display = true;
  }

  remove() {
    this.display = false;
    this.message = undefined;
  }
}
