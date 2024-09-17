import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) {
   }
  

   apiURL = ''//'https://gem-ablaze-echo.glitch.me/project';

  getProjects() {

    const pros =[{
     
      "id": 1,
      "name": "The Last Of Us ",
      "desc": "A game built with Java. It is about a group of heroes trying to win against the zombies in the game. The game includes supplies and vaccines that help the hero to win against the zombies.",
      "skills": [
        "Java",
        "JavaFX",
        "OOP",
        "GUI Design",
        "Event Handling"
      ],
      "githubUrl": "https://github.com/your-username/the-last-of-us-game",
      "imageUrl": "LOU.jpeg"
    },
    {
      
      "id": 2,
      "name": "Memory Game",
      "desc": "Developed as a personal project using the timeline feature and object-oriented programming principles. Designed for one or two players as an interactive game and includes different levels of difficulty.",
      "skills": [
        "Java",
        "JavaFX",
        "OOP",
        "Timeline",
        "GUI Design"
      ],
      "githubUrl": "https://github.com/your-username/memory-game",
      "imageUrl": "memorygame.jpeg"
    },
    {
      
      "id": 3,
      "name": "Heroes and Monsters Game",
      "desc": "A simple game utilizing object-oriented programming principles in C++.",
      "skills": [
        "C++",
        "OOP"
      ],
      "githubUrl": "https://github.com/your-username/heroes-and-monsters-game",
      "imageUrl": "c++game.jpeg"
    },
    {
      
      "id": 4,
      "name": "HomeSync Project",
      "desc": "A virtual assistant that supports users in various aspects of their daily lives and home management. Created an Enhanced Entity-Relationship Diagram (EERD) and converted it to a relational schema. Developed SQL code to manage the database. Built a website using the C# .NET framework connected to the database.",
      "skills": [
        "C#",
        ".NET",
        "SQL",
        "Database Management"
      ],
      "githubUrl": "https://github.com/your-username/homesync-projects",
      "imageUrl": "homesync.jpeg"
    },
    {
      
      "id": 5,
      "name": "Porsche Website",
      "desc": "Built a full-featured website from scratch for car rentals and sales, including user profiles, car listings, and secure transactions using MERN Stack (MongoDB, Express.js, React.js, Node.js).",
      "skills": [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "MERN Stack"
      ],
      "githubUrl": "https://github.com/your-username/porsche-website",
      "imageUrl": "porsche.jpeg"
    },
    {
     
      "id": 6,
      "name": "Augmented Reality Treasure-Hunt Game",
      "desc": "Developed an AR game using Unity, where players detect image targets to reveal and collect virtual 3D diamonds using on-screen buttons.",
      "skills": [
        "Unity",
        "Augmented Reality",
        "3D Modeling"
      ],
      "githubUrl": "https://github.com/your-username/ar-treasure-hunt-game",
      "imageUrl": "TressureHunt.jpeg"
    }]
    return pros;
  }

  editProject(id:number,updatedData:any):Observable<any>{
    const params = new HttpParams()
    .set('id', id)
    .set('name', updatedData.name)
    .set('desc', updatedData.desc)
    .set('skills',updatedData.skills);
  // this is the header for the request 
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      })  
      return this.http.put<any>(this.apiURL, updatedData,{headers});
   // return this.http.put(`${this.apiURL}`, { params });
  }

  addProject(project:any):Observable<any>{
    //this is the header for the request 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })  
    return this.http.post<any>(this.apiURL, project,{headers});
  }

  //   uploadFile(file: File): Observable<any> {
  //     const formData = new FormData();
  //     formData.append('file', file, file.name);

  //     return this.http.post('/upload', formData);
  // }

    getImageUrl(imageName: string): Observable<any> {
      return this.http.get(`/uploads/imageName`);
    }

    deleteProject(id: number): Observable<any> {
      return this.http.delete(`${this.apiURL}/${id}`);
    }

    uploadFile(formData :FormData) :Observable<any>{
      // console.log("gg");
       return this.http.post(`${this.apiURL}/imgUpload`,formData);
     }

     UploadImageToFrontend(image:string):Observable<any>{
      const formData = new FormData();
      formData.append('imageUrl', image);

      return this.http.post(`http://localhost:3000`,formData);
     }
}
