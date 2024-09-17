import { AfterViewInit, Component, DoCheck, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectsService } from '../services/projects.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ExpService } from '../services/exp.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit ,OnDestroy,AfterViewInit{
  projects :{id: number,name: string,skills: string[], desc: string,githubUrl:string,imageUrl:string}[]=[];
  private subscription?: Subscription;

  constructor(private router: Router,private projectserve: ProjectsService) { }

  ngOnInit(): void {
    try{
      this.projects = this.projectserve.getProjects();
      this.myForm = new FormGroup({
            filename :new FormControl(null)
      });
    }
    catch(err){
      console.log("Error in projects comp");
    } 
  }

//   getImage(imageUrl:string){
//     this.projectserve.getImageUrl(imageUrl).subscribe(data=>{
//       return data;
//     });
//  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  

  ngAfterViewInit(){
    this.adjustTextAreaHeight();
   // console.log(this.projects[2].imageUrl);
  }
  
  @ViewChild('projectsWrapper', { static: false }) projectsWrapper!: ElementRef;
  currentIndex: number = 0;

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.projectsWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 1020}px)`;
    }
    else {
      this.currentIndex=this.projects.length-1;
      this.projectsWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 1020}px)`;
    }
  }
  
  scrollRight() {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
      this.projectsWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 1020}px)`;
    }
    else{
      this.currentIndex=0;
      this.projectsWrapper.nativeElement.style.transform = `translateX(-${this.currentIndex * 1020}px)`;
    } 

  }


  @ViewChildren('projectInfo') projectDesc!: QueryList<ElementRef>;
  @ViewChildren('projecttext') projecttext!:QueryList<ElementRef>;
  editText :string ='Edit All';
  updateSkill:string="";
  isEditable=false;
  Edit(id:number){
    if (this.editText ==='Edit All'){
      this.isEditable=true;
      this.editText = 'Save Changes';
      this.projecttext.forEach((textarea: ElementRef) => {
        textarea.nativeElement.readOnly = false;
      });
    }

    else {
      this.isEditable=false;
      this.editText = 'Edit All';     
      this.projecttext.forEach((textarea: ElementRef) => {
        textarea.nativeElement.readOnly = true;
      });
      let projectTarget ;

      for (let i=0;i<this.projects.length;i++){
          if (this.projects[i].id == id)
            projectTarget = this.projects[i];
      }

      if (this.updateSkill.trim()) {
        projectTarget!.skills.push(this.updateSkill.trim());
        this.updateSkill = ''; // Clear the textarea
      }
      this.projectserve.editProject(id,projectTarget).subscribe(data=>
        console.log(data)
      )

    }
    this.adjustTextAreaHeight();
  }

  adjustTextAreaHeight() {
    this.projecttext.forEach((textarea: ElementRef) => {
      const element = textarea.nativeElement;
      element.style.height = 'auto'; // Reset the height to auto
      element.style.height = element.scrollHeight + 'px'; // Set height to scroll height
    });
  }
  Delete(id:number){
      this.projectserve.deleteProject(id).subscribe(data=>{
        console.log(data);
      })
      this.projects = this.projects.filter(pro =>pro.id!==id);
    
  }


  @ViewChild('edit_name') edit_name!: ElementRef;
  @ViewChild('FormProject') formpro?:NgForm;

AddNewProject(){
  const pro = this.formpro?.form.value;
  pro.skills=this.skills;
  this.projectserve.addProject(pro).subscribe(data=>{
    console.log(data);
    if(data)
    this.projects.push(data);
  })
}

newSkill: string = '';
skills: string[] = [];

addSkill(): void {
  if (this.newSkill.trim()) {
    this.skills.push(this.newSkill.trim());
    this.newSkill = ''; // Clear the textarea
  }
}
removeSkill(index: number,id:number): void {
  for (let i=0;i<this.projects.length;i++){
    if (this.projects[i].id == id)
    {this.projects[i].skills.splice(index,1)};
  }
}
onImageUpload(event: any) {
  const file = event.target.files[0];
  // Handle file upload logic here
}

//_______________________UPLOAD
   myForm! : FormGroup ; 


   fileToUpload: File | null = null; // Add a variable to hold the file

  onFileChange(event: any) {
     const fileToUpload = event.target.files[0];
    this.myForm.patchValue({ filename: fileToUpload });// This line is optional; used if you want to store the file object in the form

  }
  onSubmit(id:number){
  //   this.projectserve.uploadFile(this.myForm.value).subscribe({
  //     next:(value) =>{console.log(value);},
  //     error:(value) =>{console.log(value);}
  // })

    let formData= new FormData();
   formData.append('id',String(id));
   console.log(formData.get('id'));
  formData.append('filename', this.myForm.get('filename')?.value);
  
   this.projectserve.uploadFile(formData).subscribe({
    next:(value) =>{console.log(value);},
    error:(value) =>{console.log(value);}
    })
  }

  getImage(image:string){
      this.projectserve.UploadImageToFrontend(image).subscribe(data=>{
        console.log(data);
        return data;
      })
  }
}
  
// function ViewChild(arg0: string, arg1: { static: boolean; }): (target: DashboardComponent, propertyKey: "projectsWrapper") => void {
//   throw new Error('Function not implemented.');
// }

