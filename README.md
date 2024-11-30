Stock Management UI
This is the Stock Management UI, an Angular-based web application that helps users manage their stock portfolio. The application enables users to view, add, remove, and track the performance of their stocks in real-time.

Table of Contents
Features
Technical Stack
Setup Instructions
Adding Angular Material
Directory Structure
Usage
APIs Consumed
Screenshots
Contributing
License
Features
Functional Features
User Registration: Users can register with a unique user ID, email, and password.
Login/Logout:
Secure login with credentials.
Redirect to the dashboard upon successful login.
Add Stock:
Add stocks to the user's portfolio with symbol and quantity.
View Portfolio:
View all active stocks in the portfolio.
Display current stock prices and total portfolio value.
Remove Stock:
Remove specific quantities of stocks from the portfolio.
If the quantity reaches zero, the stock is marked as expired.
View Stock History:
Track changes to the stock portfolio with details like symbol, purchase date, quantity changed, and action (added or removed).
Provides users with a historical overview of their stock transactions.
Error Handling:
Display meaningful error messages from the backend (e.g., "No active stocks found").
Navigation:
Links to navigate between the dashboard, portfolio, stock history, and other components.
Technical Features
Responsive UI: Optimized for desktop and mobile devices.
SnackBar Notifications: Feedback for success and error events.
CORS Handling: Proper backend integration to avoid CORS issues.
Dynamic Portfolio Updates: Portfolio and value update dynamically after stock modifications.
Stock History Tracking: Users can view a history of stock changes, including additions and removals, on their dashboard.
Technical Stack
Frontend
Framework: Angular 15+
UI Components: Angular Material
Styling: CSS3 with responsive design.
Setup Instructions
Prerequisites
Node.js (v14 or higher) and npm installed.
Angular CLI (v13 or higher) installed globally.
bash
Copy code
npm install -g @angular/cli
Steps
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/stock-management-ui.git
cd stock-management-ui
Install Dependencies

bash
Copy code
npm install
Run the Application

bash
Copy code
ng serve
Open your browser at http://localhost:4200.
Production Build

bash
Copy code
ng build --prod
Adding Angular Material
Angular Material is used for UI components such as the SnackBar notifications and responsive design.

Install Angular Material

bash
Copy code
ng add @angular/material
You will be prompted to select a theme. Choose a prebuilt theme (e.g., Indigo/Pink).
You can configure global typography and animations during this step.
json
Copy code
"styles": [
  "src/styles.css",
  "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
]
Alternatively, add the theme to styles.css:

css
Copy code
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
Directory Structure
plaintext
Copy code
src/
├── app/
│   ├── components/
│   │   ├── add-stock/
│   │   ├── login/
│   │   ├── portfolio/
│   │   ├── stock-history/
│   │   └── register/
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── stock-management.service.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
│   └── styles.css
└── environments/
    ├── environment.ts
    └── environment.prod.ts
Usage
Available Routes
Route	Component	Description
/register	RegisterComponent	User registration page
/login	LoginComponent	Login page
/dashboard	DashboardComponent	Main user dashboard
/portfolio	PortfolioComponent	Portfolio management and actions
/add-stock	AddStockComponent	Add a new stock to the portfolio
/stock-history	StockHistoryComponent	View the history of stock additions and removals
APIs Consumed
User APIs

POST /users/register: Register a new user.
POST /users/login: Authenticate user and return a session.
Stock APIs

POST /users/{userId}/stocks: Add a stock.
PUT /users/{userId}/stocks/removeStock: Remove stock quantity.
GET /users/{userId}/stocks: Fetch user's active stocks.
GET /users/{userId}/stocks/portfolio/value: Get total portfolio value.
GET /users/{userId}/stocks/history: Fetch the stock history for the user, showing details such as quantity changes and actions (added or removed).
