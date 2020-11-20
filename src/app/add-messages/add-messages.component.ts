import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.scss']
})
export class AddMessagesComponent implements OnInit {
  messageForm: FormGroup;

  ngOnInit() {
    this.messageForm = new FormGroup({
      'messageData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'message': new FormControl(null, Validators.required)
      })
    });
  }

  constructor(private http: HttpClient) { }

  onSubmit(postData: { name: string; message: string; }) {
    this.http
      .post('http://localhost:8080/api/add-message', postData)
      .subscribe(responseData => {
        console.log(responseData)
      })
    console.log("submitting")
  }
}
