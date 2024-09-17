import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ExpService } from '../../services/exp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-expsection',
  templateUrl: './expsection.component.html',
  styleUrl: './expsection.component.css'
})
export class ExpsectionComponent implements OnInit,AfterViewInit{
  experience :{id:number,name:string,year:string,desc:string,role:string,imageUrl:string}[]=[];

  constructor(private expserv :ExpService){}

  ngOnInit() :void{
      this.experience =  this.expserv.getExperience();
  }
  ngAfterViewInit():void{
    this.adjustTextAreaHeight();
  }

  @ViewChild('experienceWrapper', { static: false }) experienceWrapper!: ElementRef;

  currentIndex: number = 0;

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.experienceWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 1042}px)`;
    }
    else {
      this.currentIndex=this.experience.length-1;
      this.experienceWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 1042}px)`;
    }
  }
  
  scrollRight() {
    if (this.currentIndex < this.experience.length - 1) {
      this.currentIndex++;
      this.experienceWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 1042}px)`;
    }
    else{
      this.currentIndex=0;
      this.experienceWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 1042}px)`;
    } 

  }
  @ViewChild('Formexp') formpro?:NgForm;
  
  AddNewExp(){
      const pro = this.formpro?.form.value;
      this.expserv.addExperience(pro).subscribe(data=>{
        console.log(data);
        if(data)
          this.experience.push(data);
      })
    
  }

  @ViewChildren('exptext') experiencetext!:QueryList<ElementRef>;

  adjustTextAreaHeight() {
    this.experiencetext.forEach((textarea: ElementRef) => {
      const element = textarea.nativeElement;
      element.style.height = 'auto'; // Reset the height to auto
      element.style.height = element.scrollHeight + 'px'; // Set height to scroll height
    });
  }
  
  editText='Edit All';
  isEditable=false;


  Edit(id:number){
    if (this.editText ==='Edit All'){
      this.isEditable=true;
      this.editText = 'Save Changes';
      this.experiencetext.forEach((textarea: ElementRef) => {
        textarea.nativeElement.readOnly = false;
      });
    }

    else {
      this.isEditable=false;
      this.editText = 'Edit All';     
      this.experiencetext.forEach((textarea: ElementRef) => {
        textarea.nativeElement.readOnly = true;
      });
     
      // let expTarget =this.experience[(id-1)%this.experience.length];
      let expTarget;
      for (let i=0;i<this.experience.length;i++){
        if (this.experience[i].id == id)
          expTarget = this.experience[i];
      }
      this.expserv.editExperience(id,expTarget).subscribe(data=>
        console.log(data)
      )

    }
    this.adjustTextAreaHeight();
  }

  Delete(id:number){
      this.expserv.deleteExperience(id).subscribe(data=>{
        console.log(data);
      })
      this.experience = this.experience.filter(exp =>exp.id!==id);
  }

}
