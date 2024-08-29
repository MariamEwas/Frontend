import { Component, OnInit } from '@angular/core';
import { EduPhaseService } from '../services/edu-phase.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
// export class AboutComponent {
//     Introtext='I am a third year , student in giu (german international university .. \n'
//     +'I majored in data science .. which is my lovly field .. I spent my first two years in the university '+
//     ' exploring different fields in computer science ..';
//     text1= 'in first semester .. we studied different introductory courses to cs such as ';

//     text2=' and in the second semester(which was a bit more heavy courses) .. we took courses like:';
//     text3='in semester 3 ,which was a heaviest and most enjoyable semeseter at the same time .. we took courses : ';
//     text4='in semester 4,the courses we took in this semester specifically helped us to choose which our majors now :'

//     subjects1=['Technical foundation (digital logic design)' , 'Math1' ,'programming 1','physics'];
//     subjects2=['Intro to Networks','Math2','programming 2 (building a game)','Theortical foundation','computer orgnization'];
//     subjects3=['Data Structure and Algorithms','programming3','Math3','Operating Systems','Databases'];
//     subjects4=['Data science','Software Engineering','Media Informaitcs','distributed systems','information security'];


//     finaltext ='I hope to learn more in the upcoming semesters !';
//   }
export class AboutComponent implements OnInit{

  constructor(private eduservice:EduPhaseService){}
  ngOnInit():void{
    this.eduservice.getPhases().subscribe(data=>{
      console.log(data)
      this.EducationPhases=data
  })
  }
  Introtext = 'I am a third-year student at the German International University (GIU), majoring in Data Science, a field I am deeply passionate about. Throughout my first two years, I explored various areas of Computer Science, gaining a broad foundation that has guided my academic journey.';
  finaltext = 'I am excited to continue learning and growing in the upcoming semesters!';

  EducationPhases !: {id:number,desc:string,courses:{coursename:string,shortdesc:string}[]}[];

}

