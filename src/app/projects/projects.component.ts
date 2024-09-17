import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit ,OnDestroy{

  projects :{id: number,name: string,skills: string[], desc: string,githubUrl:string,imageUrl:string}[]=[];
  private subscription?: Subscription;

  constructor(private router: Router,private projectserve: ProjectsService) { }

  ngOnInit(): void {
    try{
      
      this.projects = this.projectserve.getProjects();
   
    }
    catch(err){
      console.log("Error in projects comp");
    } 
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // postProduct(){
  //   let product = { title: 'product 1', body: 'my product', userId: 1 };
   
  //     this.dataServ.addProduct(product).subscribe(data => {
  //        console.log(data)
  //     });


  
}
