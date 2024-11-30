# Stock Management UI

This is the **Stock Management UI**, an Angular-based web application that helps users manage their stock portfolio. The application enables users to view, add, remove, and track the performance of their stocks in real-time.

---

## Table of Contents
- [Features](#features)
- [Technical Stack](#technical-stack)
- [Setup Instructions](#setup-instructions)
  - [Adding Angular Material](#adding-angular-material)
- [Directory Structure](#directory-structure)
- [Usage](#usage)
- [APIs Consumed](#apis-consumed)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### Functional Features
1. **User Registration**: Users can register with a unique user ID, email, and password.
2. **Login/Logout**:
   - Secure login with credentials.
   - Redirect to the dashboard upon successful login.
3. **Add Stock**:
   - Add stocks to the user's portfolio with symbol and quantity.
4. **View Portfolio**:
   - View all active stocks in the portfolio.
   - Display current stock prices and total portfolio value.
5. **Remove Stock**:
   - Remove specific quantities of stocks from the portfolio.
   - If the quantity reaches zero, the stock is marked as expired.
6. **Error Handling**:
   - Display meaningful error messages from the backend (e.g., "No active stocks found").
7. **Navigation**:
   - Links to navigate between the dashboard, portfolio, and other components.

### Technical Features
1. **Responsive UI**: Optimized for desktop and mobile devices.
2. **SnackBar Notifications**: Feedback for success and error events.
3. **CORS Handling**: Proper backend integration to avoid CORS issues.
4. **Dynamic Portfolio Updates**: Portfolio and value update dynamically after stock modifications.

---

## Technical Stack

### Frontend
- **Framework**: [Angular](https://angular.io/) 15+
- **UI Components**: [Angular Material](https://material.angular.io/)
- **Styling**: CSS3 with responsive design.
---

## Setup Instructions

### Prerequisites
1. **Node.js** (v14 or higher) and npm installed.
2. **Angular CLI** (v13 or higher) installed globally.
   ```bash
   npm install -g @angular/cli
   ```

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/stock-management-ui.git
   cd stock-management-ui
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   ng serve
   ```
   - Open your browser at [http://localhost:4200](http://localhost:4200).

4. **Production Build**
   ```bash
   ng build --prod
   ```

---

### Adding Angular Material

Angular Material is used for UI components such as the SnackBar notifications and responsive design.

1. **Install Angular Material**
   ```bash
   ng add @angular/material
   ```

   - You will be prompted to select a theme. Choose a prebuilt theme (e.g., Indigo/Pink).
   - You can configure global typography and animations during this step.

   ```json
   "styles": [
     "src/styles.css",
     "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
   ]
   ```

   Alternatively, add the theme to `styles.css`:

   ```css
   @import "~@angular/material/prebuilt-themes/indigo-pink.css";
   ```

---

## Directory Structure

```plaintext
src/
├── app/
│   ├── components/
│   │   ├── add-stock/
│   │   ├── login/
│   │   ├── portfolio/
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
```

---

## Usage

### Available Routes
| Route             | Component         | Description                         |
|--------------------|-------------------|-------------------------------------|
| `/register`        | RegisterComponent | User registration page              |
| `/login`           | LoginComponent    | Login page                          |
| `/dashboard`       | DashboardComponent| Main user dashboard                 |
| `/portfolio`       | PortfolioComponent| Portfolio management and actions    |
| `/add-stock`       | AddStockComponent | Add a new stock to the portfolio    |

---

## APIs Consumed

1. **User APIs**
   - `POST /users/register`: Register a new user.
   - `POST /users/login`: Authenticate user and return a session.

2. **Stock APIs**
   - `POST /users/{userId}/stocks`: Add a stock.
   - `PUT /users/{userId}/stocks/removeStock`: Remove stock quantity.
   - `GET /users/{userId}/stocks`: Fetch user's active stocks.
   - `GET /users/{userId}/stocks/portfolio/value`: Get total portfolio value.
