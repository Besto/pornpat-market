import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDetailsComponent } from '../../components/shop-details/shop-details.component';
import { ShopListComponent } from '../../components/shop-list/shop-list.component';
import { ShopComponent } from '../../components/shop/shop.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from '../../components/payment/payment.component';

const routes: Routes = [
  { path: '', component: ShopComponent},
  { path: ':id', component: ShopComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ShopComponent,
    ShopListComponent,
    ShopDetailsComponent,
    PaymentComponent
  ]
})
export class ShopModule { }
