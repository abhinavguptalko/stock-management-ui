import { Component, OnInit } from '@angular/core';
import { StockManagementService } from '../services/stock-management.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';  // Import MatSnackBar

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  userId: string = 'abhi19'; // Replace with actual user ID from AuthService or route
  portfolio: any[] = [];
  portfolioValue: number = 0;
  constructor(private stockManagementService: StockManagementService,private router: Router,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getPortfolio();
    this.loadPortfolioValue();
  }

  getPortfolio(): void {
    this.stockManagementService.getPortfolio().subscribe(
      (response) => {
        this.portfolio = response;
      },
      (error) => {
        console.error('Failed to fetch portfolio', error);
        const errorMessage = error?.error?.detail || 'Failed to load portfolio. Please try again later.';
        this.openSnackBar(errorMessage, 'Close', 'error');
      }
    );
  }


  // Remove stock and quantity from portfolio
  removeStock(symbol: string, quantity: number): void {
    if (confirm(`Are you sure you want to remove ${quantity} of ${symbol}?`)) {
      this.stockManagementService.removeStock(symbol, quantity).subscribe(
        () => {
          this.openSnackBar('Stock removed successfully!', 'Close', 'success');
          this.router.navigate(['/dashboard']); // Navigate to dashboard after stock removal
        
        },
        (error) => {
          console.error('Failed to remove stock', error);
          const errorMessage = error?.error?.detail || 'Failed to remove stock. Please try again later.';
          this.openSnackBar(errorMessage, 'Close', 'error');
        }
      );
    }
  }

  loadPortfolioValue(): void {
    this.stockManagementService.getPortfolioValue().subscribe(
      (value) => {
        this.portfolioValue = value;
      },
      (error) => {
        console.error('Error fetching portfolio value:', error);
        const errorMessage = error?.error?.detail || 'Failed to load portfolio value.';
        this.openSnackBar(errorMessage, 'Close', 'error');
      }
    );
  }
  openSnackBar(message: string, action: string, panelClass: string): void {
    this.snackBar.open(message, action, {
      duration: 3000, // Show message for 3 seconds
      panelClass: [panelClass] // Add custom class for styling
    });
  }
  
}
