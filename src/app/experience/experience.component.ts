import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExpService } from '../services/exp.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit,OnDestroy{

  experience :{id:number,name:string,year:string,desc:string,role:string,imageUrl:string}[]=[];
  subscription?:Subscription;
  constructor(private expserv:ExpService){}

  ngOnInit():void{
    this.subscription=this.expserv.getExperience().subscribe(data =>{
      this.experience = data;
    });

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
