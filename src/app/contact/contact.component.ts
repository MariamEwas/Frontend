import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { MessagesService } from '../services/messages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit,OnDestroy{

    @ViewChild('myForm') form?: NgForm;
    @ViewChild('message') mess?:NgModel;

    constructor(private msgService:MessagesService){}
    private sub? :Subscription;

    ngOnInit():void{
      // const msg = {name:this.form?.controls.name}
     
    }
    ngOnDestroy(): void {
      
    }

    postData(){
      console.log(this.form?.form.value);
      //alert(this.mess?.value);
      const msg = this.form?.form.value;
      this.sub = this.msgService.sendMessage(msg).subscribe(data=>{
        console.log(data);
      })
    }

}
