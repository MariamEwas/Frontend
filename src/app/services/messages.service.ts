import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http:HttpClient) { }

  apiURL ='http://localhost:3000/message';

  sendMessage(message:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })  
    return this.http.post<any>(this.apiURL, message,{headers});
  
  }

  getMessages():Observable<any>{
    return this.http.get(this.apiURL);
  }

}
