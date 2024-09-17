import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EduPhaseService {

  constructor(private http:HttpClient) { }

  apiURL = ''//'http://localhost:3000/educationphase'

  //edus =[];
  getPhases(){
    const edus = [
      {
        
        "id": 1,
        "desc": "During the first semester, we covered foundational courses in Computer Science, including:",
        "courses": [
          {
            "coursename": "Technical Foundations (Digital Logic Design)",
            "shortdesc": "Introduction to digital circuits and logic design principles.",
           
          },
          {
            "coursename": "Mathematics I",
            "shortdesc": "Covers calculus and linear algebra essential for computing.",
            
          },
          {
            "coursename": "Programming I",
            "shortdesc": "Basic programming concepts and problem-solving using Java.",
            
          },
          {
            "coursename": "Physics",
            "shortdesc": "Fundamentals of classical mechanics and electromagnetism.",
           
          }
        ],
        "name": "Semester 1"
    },{
      
      "id": 2,
      "desc": "In the second semester, which introduced more advanced topics, we studied:",
      "courses": [
        {
          "coursename": "Introduction to Networks",
          "shortdesc": "Basic concepts of computer networks, including protocols and models.",
         
        },
        {
          "coursename": "Mathematics II",
          "shortdesc": "Explores discrete mathematics and advanced calculus.",
          
        },
        {
          "coursename": "Programming II (Game Development)",
          "shortdesc": "Intermediate programming with OOP .. and we made a game using java",
          
        },
        {
          "coursename": "Theoretical Foundations",
          "shortdesc": "Introduction to formal languages, automata theory, and complexity.",
         
        },
        {
          "coursename": "Computer Organization",
          "shortdesc": "Study of computer architecture and the organization of hardware components.",
         
        }
      ],
      "name": "Semester 2"
    },{
      
      "id": 3,
      "desc": "The third semester was the most challenging and rewarding, with a focus on core subjects such as:",
      "courses": [
        {
          "coursename": "Data Structures and Algorithms",
          "shortdesc": "Analysis and implementation of fundamental data structures and algorithms.",
         
        },
        {
          "coursename": "Programming III",
          "shortdesc": "Advanced programming concepts using c++ (pointers, reference and memory operations)",
         
        },
        {
          "coursename": "Mathematics III",
          "shortdesc": "Further exploration of mathematical concepts, including probability and statistics.",
          
        },
        {
          "coursename": "Operating Systems",
          "shortdesc": "Fundamentals of operating system design, including processes, memory, and file systems.",
          
        },
        {
          "coursename": "Databases",
          "shortdesc": "Introduction to database management systems and SQL.",
         
        }
      ],
      "name": "Semester 3"
    },{
     
      "id": 4,
      "desc": "The fourth semester helped us refine our paths, with courses that directly influenced our major choices:",
      "courses": [
        {
          "coursename": "Data Science",
          "shortdesc": "Introduction to data analysis, machine learning, and statistical techniques.",
         
        },
        {
          "coursename": "Software Engineering",
          "shortdesc": "Principles and practices of software development, including project management.",
          
        },
        {
          "coursename": "Media Informatics",
          "shortdesc": "Study of digital media, including multimedia systems and human-computer interaction.",
          
        },
        {
          "coursename": "Distributed Systems",
          "shortdesc": "Exploration of distributed computing principles and applications.",
          
        },
        {
          "coursename": "Information Security",
          "shortdesc": "Fundamentals of cybersecurity, including encryption and network security.",
         
        }
      ],
      "name": "Semester 4"
    }]
   
    return edus;
  }

  deletePhase(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  editPhase(id:number,updatedData:any):Observable<any>{
    const params = new HttpParams()
    .set('id', id)
    .set('name', updatedData.name)
    .set('courses', updatedData.desc);

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      })  
      return this.http.put<any>(this.apiURL, updatedData,{headers});
  }

  addPhase(Phase:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })  
    return this.http.post<any>(this.apiURL, Phase,{headers});
  }
}
