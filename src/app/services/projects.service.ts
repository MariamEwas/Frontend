import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) {
   }
  
<<<<<<< HEAD
=======
<<<<<<< HEAD
   
=======
>>>>>>> 676e95eda394bfebb9c7a4cf9148e29819bbadc5
   apiURL = 'https://gem-ablaze-echo.glitch.me/project';

  getProjects() :Observable <any>{
    return this.http.get<any>(this.apiURL);
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
