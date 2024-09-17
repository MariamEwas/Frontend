import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  constructor(private http: HttpClient) { }

  apiURL = ''//'http://localhost:3000/experience';
  
  getExperience(){ 
    const exps =[{
     
      name: "Contestant at ICPC",
      year: "2023 -\n 2024",
      desc: "- ECPC 2024\nSecured 2nd place at the university level among 30 teams, qualifying for the ECPC competition.\n\n- ECPC 2023\nSecured 2nd place at the university level in the qualifications, achieving 21st place overall among all participating universities, and qualified for the ECPC competition.\n\n- ACPC (Arab Collegiate Programming Contest) Girls - Online 2024\nAchieved 25th place and earned a bronze medal by solving 9 problems, including the first accepted solution for one of the problems.",
      role: "Participant",
      id: 1,
      imageUrl: "icpc.jpeg"
    },
    {
      
      name: "Java Programming Intern at Code Casa",
      year: "Oct - 2023",
      desc: "for a month, I worked remotely on tasks involving Object-Oriented Programming (OOP), databases, GUI design and Java. such as making a simple guessing game, and library management system.",
      role: "Intern",
      id: 2,
      imageUrl: "codecasa.png"
    },
    {
      
      name: "IEEE Cairo University - Student Branch, Computer Community",
      year: "Feb - May 2024",
      desc: "As a problem-solving Instructor, I was responsible for making sessions for students, make presentations, and other tasks.",
      role: "Member",
      id: 4,
      imageUrl: "ieee.jpeg"
    },
    {
      
      name: "NTI (National Telecommunication Institute) - MEAN Stack Training",
      year: "Jul - Sep 2024",
      desc: "An intensive MEAN stack training program, where I strengthened my understanding of core JavaScript concepts and built expertise in Angular for front-end development. The program also covered database management, with a focus on MongoDB, Express and Node.js for Backend, and introduced essential UI/UX principles. Throughout, I worked on various tasks and projects, culminating in the creation of this portfolio as my final project.",
      role: "Training Participant",
      id: 6,
      imageUrl: "nti.png"
    },
    {
      
      id: 3,
      name: "ICPC Algo Queen 2024 (The Girls Programming Cup)",
      year: "Jan - 2024",
      desc: "It is a contest for girls all around the world that organized by Amrita Vishwa Vidyapeetham Mysuru Campus, and sponsored by ICPC - International Collegiate Programming Contest. After participating in the first round, the preliminary round, I qualified to the final round which was really exciting and enjoyable.",
      imageUrl: "icpcalgoqueen.jpg",
      role:"participant"
    }]
    return exps;
  }

  deleteExperience(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  editExperience(id:number,updatedData:any):Observable<any>{
    const params = new HttpParams()
    .set('id', id)
    .set('name', updatedData.name)
    .set('desc', updatedData.desc)
    .set('role',updatedData.role)
    .set('year',updatedData.year);
  // this is the header for the request 
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      })  
      return this.http.put<any>(this.apiURL, updatedData,{headers});
   // return this.http.put(`${this.apiURL}`, { params });
  }

  addExperience(Experience:any):Observable<any>{
    //this is the header for the request 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })  
    return this.http.post<any>(this.apiURL, Experience,{headers});
  }
}
