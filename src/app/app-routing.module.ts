import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { UpdateMessageComponent } from './update-message/update-message.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesComponent
  },
  {
    path: 'add',
    component: AddMessagesComponent
  },
  {
    path: 'update',
    component: UpdateMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
