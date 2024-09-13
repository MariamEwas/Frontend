import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrl: './exp.component.css'
})
export class ExpComponent {
    @Input() myexp!:{id:number,name:string,year:string,desc:string,role:string,imageUrl:string};
    
}
