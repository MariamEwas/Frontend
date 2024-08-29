import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginError ='';
  apiUrl = 'http://localhost:3000/login';
  constructor(private http:HttpClient,private router:Router) { }
  // getDashboard(username:string,password:string){
  //   this.http.post<{ token: string }>(this.apiUrl,{ username, password })
  //     .subscribe({
  //       next: (response) => {
  //         // Store the JWT token in localStorage
  //         localStorage.setItem('token', response.token);

  //         // Navigate to the dashboard
  //         this.router.navigate(['/dashboard']);
  //       },
  //       error: (err) => {
  //         this.loginError = 'Invalid username or password';
  //       }
  //     });
  // }

}
