import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EduPhaseService {

  constructor(private http:HttpClient) { }

  apiURL = 'http://localhost:3000/educationphase'

  getPhases():Observable<any>{
    return this.http.get(this.apiURL);
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
