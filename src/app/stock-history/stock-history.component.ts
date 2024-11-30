// src/app/stock-history/stock-history.component.ts
import { Component, OnInit } from '@angular/core';
import { StockHistoryService } from '../services/stock-history.service';

@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnInit {

  stockHistory: any[] = [];  // To store the stock history data
  loading: boolean = false;  // Loading state

  constructor(private stockHistoryService: StockHistoryService) { }

  ngOnInit(): void { 
    this.getStockHistory();
  }

  getStockHistory(): void {
    this.loading = true;
    this.stockHistoryService.getStockHistory().subscribe({
      next: (data) => {
        this.stockHistory = data;
      },
      error: (error) => {
        console.error('Error fetching stock history', error);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
