import { Component, OnInit } from '@angular/core';
import { EduPhaseService } from '../services/edu-phase.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent implements OnInit{

  constructor(private eduservice:EduPhaseService){}
  ngOnInit():void{
    this.eduservice.getPhases().subscribe(data=>{
      this.EducationPhases=data
  })
  }
  Introtext = 'I am a third-year student at the German International University (GIU), majoring in Data Science, a field I am deeply passionate about. Throughout my first two years, I explored various areas of Computer Science, gaining a broad foundation that has guided my academic journey.';
  finaltext = '✨ I am excited to continue learning and growing in the upcoming semesters! ✨';

  EducationPhases !: {id:number,desc:string,name:string,courses:{coursename:string,shortdesc:string}[]}[];

}

