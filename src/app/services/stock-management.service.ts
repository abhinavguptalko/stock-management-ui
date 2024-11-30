import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockManagementService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  addStock(stock: { symbol: string; quantity: number }): Observable<any> {
    const userId = localStorage.getItem('userId');
    return this.http.post(`${this.baseUrl}/${userId}/stocks`, stock);
  }

  getPortfolio(): Observable<any> {
    const userId = localStorage.getItem('userId');
    return this.http.get(`${this.baseUrl}/${userId}/stocks`);
  }

  removeStock(stockSymbol: string, quantity: number): Observable<void> {
    const stockDTO = {
      symbol: stockSymbol,
      quantity: quantity,
    };
    const userId = localStorage.getItem('userId');
    return this.http.put<void>(`${this.baseUrl}/${userId}/stocks/removeStock`, stockDTO);
  }

  getPortfolioValue(): Observable<number> {
    const userId = localStorage.getItem('userId');
    return this.http.get<number>(`${this.baseUrl}/${userId}/stocks/portfolio/value`);
  }

}
