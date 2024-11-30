// src/app/stock-history.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockHistoryService {

  private apiUrl = 'http://localhost:8080/api/stock-history';  // URL to your Spring Boot backend

  constructor(private http: HttpClient) { }

  getStockHistory(): Observable<any[]> {
    const userId = localStorage.getItem('userId');
    return this.http.get<any[]>(`${this.apiUrl}/${userId}`);
  }
}
