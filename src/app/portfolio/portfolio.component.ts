import { Component, OnInit } from '@angular/core';
import { StockManagementService } from '../services/stock-management.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  userId: string = 'abhi19'; // Replace with actual user ID from AuthService or route
  portfolio: any[] = [];
  portfolioValue: number = 0;
  constructor(private stockManagementService: StockManagementService) {}

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
        alert('Failed to load portfolio. Please try again later.');
      }
    );
  }


  removeStock(symbol: string): void {
    if (confirm(`Are you sure you want to remove the stock ${symbol}?`)) {
      this.stockManagementService.removeStock(symbol).subscribe(
        () => {
          alert(`Stock ${symbol} removed successfully!`);
          this.getPortfolio(); // Refresh the portfolio after deletion
        },
        (error) => {
          console.error('Failed to remove stock', error);
          alert(`Failed to remove the stock ${symbol}. Please try again later.`);
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
        alert('Failed to load portfolio value.');
      }
    );
  }

  
}
