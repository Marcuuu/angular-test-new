import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-message',
  templateUrl: './update-message.component.html',
  styleUrls: ['./update-message.component.scss']
})
export class UpdateMessageComponent implements OnInit {
  updateMessageForm: FormGroup;
  messages = []
  index:number
  name: string = ""
  newName: string = ""
  message: string = ""

  ngOnInit() {
    this.data.currentMessage.subscribe(value => {
      this.index = parseInt(value)
    })
    this.updateMessageForm = new FormGroup({
      'updateMessageData': new FormGroup({
        'name': new FormControl(this.name, Validators.required),
        'newName': new FormControl(this.newName, Validators.required),
        'message': new FormControl(this.message, Validators.required),
        'index': new FormControl(this.index, Validators.required)
      })
    })
    this.fetchMessages()
    console.log(this.newName)
  }

  constructor(private http: HttpClient, private data: MessageService, private router: Router) { }

  fetchMessages() {
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
        for (let i in this.messages) {
          let index = parseInt(i)
          if (index == this.index) {
            console.log(this.messages[i])
            this.newName = this.messages[i].newName
            this.name = this.messages[i].name
            console.log(this.newName)
            this.message = this.messages[i].message
          }
        }
        return messageArray
      }))
      .subscribe(messages => {
        console.log(messages)
      })
  }

  onUpdateMessage(postData: { name: string; message: string; key: string; }) {
    this.http
      .put('http://localhost:8080/api/update-message', postData)
      .subscribe(responseData => {
        console.log(responseData)
      })
    console.log("updating")
    this.router.navigate(['/'])
  }
}
