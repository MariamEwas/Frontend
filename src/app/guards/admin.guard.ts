import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { isPlatformBrowser } from '@angular/common';

export const adminGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService); // Inject AuthService
  const router = inject(Router); // Inject Router
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    console.log('Running in the browser environment');
    
    const token = localStorage.getItem('token');
    console.log('Token:', token);

    if (token!==undefined) {
      console.log('Token found, granting access');
      return true; // Grant access if the user is an admin
    } else {
      console.log('No token found, redirecting to login');
      router.navigate(['/login']); // Redirect to login page
      return false; // Deny access
    }
  }

  console.log('Not running in the browser environment');
  await router.navigateByUrl('/home').then(() => {
    console.log('Navigation to login completed');
    return false;
  }).catch(err => {
    console.error('Navigation to login failed', err);
    return false;
  }); // Redirect to login page

  return false; // Deny access
};
