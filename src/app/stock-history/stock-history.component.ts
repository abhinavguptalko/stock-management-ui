// src/app/stock-history/stock-history.component.ts
import { Component, OnInit } from '@angular/core';
import { StockHistoryService } from '../services/stock-history.service';
import { MatSnackBar } from '@angular/material/snack-bar';  // Import MatSnackBar
@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnInit {

  stockHistory: any[] = [];  // To store the stock history data
  loading: boolean = false;  // Loading state

  constructor(private stockHistoryService: StockHistoryService,private snackBar: MatSnackBar) { }

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
        const errorMessage = error?.error?.detail || 'Error fetching stock history Please try again.';
        this.openSnackBar(errorMessage, 'Close', 'error');
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  // Function to open SnackBar
  openSnackBar(message: string, action: string, panelClass: string): void {
    this.snackBar.open(message, action, {
      duration: 3000, // Show message for 3 seconds
      panelClass: [panelClass] // Add custom class for styling
    });
  }
}
