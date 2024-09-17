import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExpService } from '../services/exp.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit,OnDestroy{

  experience :{name:string,year:string,desc:string,role:string,id:number,imageUrl:string}[]=[];
  subscription?:Subscription;
  constructor(private expserv:ExpService){}

  ngOnInit():void{
      this.experience = this.expserv.getExperience();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
