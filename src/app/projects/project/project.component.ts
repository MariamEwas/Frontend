import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() myproject!: {id: number,name: string,skills: string[], desc: string,githubLink:string,imageUrl:string}

    
  }