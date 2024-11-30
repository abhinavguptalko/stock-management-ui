import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';  // Import MatSnackBar

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userId: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) {}

  register(): void {
    const user = {
      userId: this.userId,
      email: this.email,
      password: this.password,
    };

    this.authService.registerUser(user).subscribe(
      (response) => {
        this.openSnackBar('Registration successful! You can now log in.', 'Close', 'success');
        this.authService.saveUserId(this.userId);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error(error);
        const errorMessage = error?.error?.detail || 'Registration failed. Please try again.';
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
