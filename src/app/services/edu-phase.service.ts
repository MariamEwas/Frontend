import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EduPhaseService {

  constructor(private http:HttpClient) { }

  apiURL = 'http://localhost:3000/educationphase'

  //edus =[];
  getPhases(){
    const edus = [
      {
        "_id": {
          "$oid": "66cf2543b66912e407e46df4"
        },
        "id": 1,
        "desc": "During the first semester, we covered foundational courses in Computer Science, including:",
        "courses": [
          {
            "coursename": "Technical Foundations (Digital Logic Design)",
            "shortdesc": "Introduction to digital circuits and logic design principles.",
            "_id": {
              "$oid": "66cf37c583912cbe9177100e"
            }
          },
          {
            "coursename": "Mathematics I",
            "shortdesc": "Covers calculus and linear algebra essential for computing.",
            "_id": {
              "$oid": "66cf37c583912cbe9177100f"
            }
          },
          {
            "coursename": "Programming I",
            "shortdesc": "Basic programming concepts and problem-solving using Java.",
            "_id": {
              "$oid": "66cf37c583912cbe91771010"
            }
          },
          {
            "coursename": "Physics",
            "shortdesc": "Fundamentals of classical mechanics and electromagnetism.",
            "_id": {
              "$oid": "66cf37c583912cbe91771011"
            }
          }
        ],
        "name": "Semester 1"
    },{
      "_id": {
        "$oid": "66cf2543b66912e407e46df5"
      },
      "id": 2,
      "desc": "In the second semester, which introduced more advanced topics, we studied:",
      "courses": [
        {
          "coursename": "Introduction to Networks",
          "shortdesc": "Basic concepts of computer networks, including protocols and models.",
          "_id": {
            "$oid": "66cf37c583912cbe91771012"
          }
        },
        {
          "coursename": "Mathematics II",
          "shortdesc": "Explores discrete mathematics and advanced calculus.",
          "_id": {
            "$oid": "66cf37c583912cbe91771013"
          }
        },
        {
          "coursename": "Programming II (Game Development)",
          "shortdesc": "Intermediate programming with OOP .. and we made a game using java",
          "_id": {
            "$oid": "66cf37c583912cbe91771014"
          }
        },
        {
          "coursename": "Theoretical Foundations",
          "shortdesc": "Introduction to formal languages, automata theory, and complexity.",
          "_id": {
            "$oid": "66cf37c583912cbe91771015"
          }
        },
        {
          "coursename": "Computer Organization",
          "shortdesc": "Study of computer architecture and the organization of hardware components.",
          "_id": {
            "$oid": "66cf37c583912cbe91771016"
          }
        }
      ],
      "name": "Semester 2"
    },{
      "_id": {
        "$oid": "66cf2543b66912e407e46df6"
      },
      "id": 3,
      "desc": "The third semester was the most challenging and rewarding, with a focus on core subjects such as:",
      "courses": [
        {
          "coursename": "Data Structures and Algorithms",
          "shortdesc": "Analysis and implementation of fundamental data structures and algorithms.",
          "_id": {
            "$oid": "66cf37c583912cbe91771017"
          }
        },
        {
          "coursename": "Programming III",
          "shortdesc": "Advanced programming concepts using c++ (pointers, reference and memory operations)",
          "_id": {
            "$oid": "66cf37c583912cbe91771018"
          }
        },
        {
          "coursename": "Mathematics III",
          "shortdesc": "Further exploration of mathematical concepts, including probability and statistics.",
          "_id": {
            "$oid": "66cf37c583912cbe91771019"
          }
        },
        {
          "coursename": "Operating Systems",
          "shortdesc": "Fundamentals of operating system design, including processes, memory, and file systems.",
          "_id": {
            "$oid": "66cf37c583912cbe9177101a"
          }
        },
        {
          "coursename": "Databases",
          "shortdesc": "Introduction to database management systems and SQL.",
          "_id": {
            "$oid": "66cf37c583912cbe9177101b"
          }
        }
      ],
      "name": "Semester 3"
    },{
      "_id": {
        "$oid": "66cf2543b66912e407e46df7"
      },
      "id": 4,
      "desc": "The fourth semester helped us refine our paths, with courses that directly influenced our major choices:",
      "courses": [
        {
          "coursename": "Data Science",
          "shortdesc": "Introduction to data analysis, machine learning, and statistical techniques.",
          "_id": {
            "$oid": "66e2ee57048d37a0ad4d4490"
          }
        },
        {
          "coursename": "Software Engineering",
          "shortdesc": "Principles and practices of software development, including project management.",
          "_id": {
            "$oid": "66e2ee57048d37a0ad4d4491"
          }
        },
        {
          "coursename": "Media Informatics",
          "shortdesc": "Study of digital media, including multimedia systems and human-computer interaction.",
          "_id": {
            "$oid": "66e2ee57048d37a0ad4d4492"
          }
        },
        {
          "coursename": "Distributed Systems",
          "shortdesc": "Exploration of distributed computing principles and applications.",
          "_id": {
            "$oid": "66e2ee57048d37a0ad4d4493"
          }
        },
        {
          "coursename": "Information Security",
          "shortdesc": "Fundamentals of cybersecurity, including encryption and network security.",
          "_id": {
            "$oid": "66e2ee57048d37a0ad4d4494"
          }
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
