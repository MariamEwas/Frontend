import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { EduPhaseService } from '../../services/edu-phase.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edu-section',
  templateUrl: './edu.component.html',
  styleUrl: './edu.component.css'
})
export class EduSectionComponent implements OnInit,AfterViewInit{

  educationphases !: {id:number,desc:string,name:string,courses:{coursename:string,shortdesc:string}[]}[];
  temcourses :{coursename:string,shortdesc?:string}[]=[];
  coursename:string='';
  shortdesc:string='';
  DescAdded=false;
  editText='Edit All'
  isEditable=false;


  constructor(private phaseservice:EduPhaseService){}
  ngOnInit(){
    this.educationphases=this.phaseservice.getPhases();
  }
  ngAfterViewInit(){
    this.adjustTextAreaHeight();

  }
  @ViewChildren('edutext') edutext!:QueryList<ElementRef>;

  adjustTextAreaHeight() {
    this.edutext.forEach((textarea: ElementRef) => {
      const element = textarea.nativeElement;
      element.style.height = 'auto'; // Reset the height to auto
      element.style.height = element.scrollHeight + 'px'; // Set height to scroll height
    });
  }



  Delete(id:number){
    this.phaseservice.deletePhase(id).subscribe(data=>{
      console.log(data);
    })
    this.educationphases = this.educationphases.filter(phase =>phase.id!==id);
  }
  Edit(id:number){
    if (this.editText ==='Edit All'){
      this.isEditable=true;
      this.editText = 'Save Changes';
      this.edutext.forEach((textarea: ElementRef) => {
        textarea.nativeElement.readOnly = false;
      });
    }

    else {
      this.isEditable=false;
      this.editText = 'Edit All';     
      this.edutext.forEach((textarea: ElementRef) => {
        textarea.nativeElement.readOnly = true;
      });
      let eduTarget;
      for (let i=0;i<this.educationphases.length;i++){
        if (this.educationphases[i].id == id)
          eduTarget = this.educationphases[i];
      }
      this.phaseservice.editPhase(id,eduTarget).subscribe(data=>
        console.log(data)
      )

    }
    this.adjustTextAreaHeight();
  }

  addCourse(){
    if (!this.coursename && this.shortdesc){
      this.DescAdded = true;
      return;
    }
    if (this.shortdesc.trim()) {
      this.temcourses.push({coursename:this.coursename.trim(),shortdesc:this.shortdesc.trim()});
      this.shortdesc = ''; // Clear the textarea
      this.coursename='';
      this.DescAdded=false;
    }
    else{
      this.temcourses.push({coursename:this.coursename.trim()});
      this.shortdesc = ''; // Clear the textarea
      this.coursename='';
      this.DescAdded=false;
    }
  }

  @ViewChild('formedu') formedu?:NgForm;
  AddNewPhase(){
    const pro = this.formedu?.form.value;
      this.phaseservice.addPhase(pro).subscribe(data=>{
        console.log(data);
        if(data)
          this.educationphases.push(data);
      })
  }

  currentIndex =0;
  @ViewChild('educationWrapper' ,{static:false}) educationWrapper!:ElementRef;
  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.educationWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 1042}px)`;
    }
    else {
      this.currentIndex=this.educationphases.length-1;
      this.educationWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 1042}px)`;
    }
  }
  
  scrollRight() {
    if (this.currentIndex < this.educationphases.length - 1) {
      this.currentIndex++;
      this.educationWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 1042}px)`;
    }
    else{
      this.currentIndex=0;
      this.educationWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 1042}px)`;
    } 

  }
}
