import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReportComponent } from './components/report/report.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShopComponent } from './components/shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { FormsModule } from '@angular/forms';
import { ShopDetailsComponent } from './components/shop-details/shop-details.component';
import { PaymentComponent } from './components/payment/payment.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'report', component: ReportComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    DashboardComponent,
    ShopComponent,
    ShopListComponent,
    ShopDetailsComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
