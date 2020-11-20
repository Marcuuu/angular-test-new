import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  hasMessages = false;
  messages = []
  id: string;

  constructor(private http: HttpClient, private data: MessageService, private router: Router) { }

  ngOnInit() {
    this.fetchMessages()
  }

  private fetchMessages() {
    this.http
      .get('http://localhost:8080/api/messages')
      .pipe(map(responseData => {
        const messageArray = []
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            messageArray.push({ ...responseData[key], id: key })
          }
        }
        this.messages = messageArray
        console.log(this.messages)
        return messageArray
      }))
      .subscribe(messages => {
        if (messages.length > 0) {
          this.hasMessages = true
        }
        console.log(messages)
      })
  }

  public onUpdateMessage(index: string) {
    this.data.changeMessage(index)
    this.router.navigate(['/update'])
  }
}
