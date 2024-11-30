import { Component } from '@angular/core';
import { StockManagementService } from '../services/stock-management.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';  // Import MatSnackBar

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css'],
})
export class AddStockComponent {
  stockSymbol: string = '';
  stockQuantity: number | null = null;

  constructor(private stockManagementService: StockManagementService, private router: Router,private snackBar: MatSnackBar) {}

  addStock(): void {
    if (!this.stockSymbol || !this.stockQuantity || this.stockQuantity <= 0) {
      alert('Please enter valid stock symbol and quantity.');
      return;
    }

    const stock = {
      symbol: this.stockSymbol,
      quantity: this.stockQuantity,
    };

    this.stockManagementService.addStock(stock).subscribe(
      (response) => {
        this.openSnackBar('Stock Added successfully!', 'Close', 'success');
        this.router.navigate(['/dashboard']); // Redirect to Dashboard after adding stock
      },
      (error) => {
        console.error(error);
        const errorMessage = error?.error?.detail || 'Stock Addition Failed Please try again.';
        this.openSnackBar(errorMessage, 'Close', 'error');
      }
    );
  }

  // Function to open SnackBar
  openSnackBar(message: string, action: string, panelClass: string): void {
    this.snackBar.open(message, action, {
      duration: 3000, // Show message for 3 seconds
      panelClass: [panelClass] // Add custom class for styling
    });
  }
}
