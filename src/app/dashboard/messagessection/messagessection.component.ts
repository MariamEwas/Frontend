import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messagessection',
  templateUrl: './messagessection.component.html',
  styleUrl: './messagessection.component.css'
})
export class MessagessectionComponent implements OnInit{
  messages!:{ SenderName:string,SenderEmail:string,Message:string}[];

  constructor(private msgService:MessagesService){}
  ngOnInit():void{
    this.msgService.getMessages().subscribe(data=>{
      this.messages = data;
    })
  }

}
