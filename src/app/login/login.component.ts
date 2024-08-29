import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (private http:HttpClient,private router:Router){}
  @ViewChild('myForm') loginForm!:NgForm;

  loginError ='';
  Login(){
    const { name, password } = this.loginForm.value;

    this.http.post<{ token: string }>('http://localhost:3000/login', { name, password })
      .subscribe({
        next: (response) => {
          console.log(response.token);
          // Store the JWT token in localStorage
          localStorage.setItem('token', response.token);

          // Navigate to the dashboard
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.loginError ="invalid name or password";
        }
      });
}
}
