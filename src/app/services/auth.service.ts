import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Login method
  login(userId: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, { userId, password });
  }

  // Register method
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/addUser`, user);
  }

  saveUserId(userId: string): void {
    localStorage.setItem('userId', userId);
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  clearUserId(): void {
    localStorage.removeItem('userId');
  }
}
