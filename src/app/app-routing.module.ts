import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-stock', component: AddStockComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
