import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Message {
  name: string,
  date: string,
  message: string
}

@Injectable()
export class MessageService {
  constructor(private http: HttpClient) { }

  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>
    ('http://localhost:8080/api/messages')
  }
}
