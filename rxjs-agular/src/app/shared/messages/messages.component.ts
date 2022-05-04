import { Component, OnInit } from '@angular/core';
import { MessagesService } from '@services/messages/messages.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  showMessages = false;

  errors$: Observable<string[]>;
  constructor(public messagesService: MessagesService) {
    console.log('Created messages component');
  }

  ngOnInit() {
    this.errors$ = this.messagesService.errors$.pipe(tap(() => (this.showMessages = true)));
  }

  onClose() {
    this.showMessages = false;
  }
}
