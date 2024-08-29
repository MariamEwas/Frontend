import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:3000/experience';
  
  getExperience():Observable<any>{ 
    return this.http.get<any>(this.apiURL);
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
