import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';  // Import MatSnackBar
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userId = '';
  password = '';

  constructor(private authService: AuthService, private router: Router,private snackBar: MatSnackBar) {}

  onSubmit() {
    this.authService.login(this.userId, this.password).subscribe(
      (response) => {
        this.openSnackBar('Login successful!', 'Close', 'success');
        this.authService.saveUserId(this.userId);
        this.router.navigate(['/dashboard']); // Navigate to dashboard upon success
      },
      (error) => {
        const errorMessage = error?.error?.detail || 'Login failed. Please try again.';
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
