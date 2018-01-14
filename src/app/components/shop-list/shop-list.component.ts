import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  showAddress = false;
  showContact = false;
  showShopType = false;
  showNumberOfShop = false;
  datatable;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.datatable = $('#datatables').DataTable();
    this.refreshTable();
  }

  refreshTable() {
    console.log('refreshTable ' + this.showAddress + ' ' + this.showContact);
    this.datatable.columns('.address').visible( this.showAddress );
    this.datatable.columns('.contact').visible( this.showContact );
    this.datatable.columns('.shop_type').visible( this.showShopType );
    this.datatable.columns('.number_of_shop').visible( this.showNumberOfShop );
  }

  showShopDetail(id) {
    this.router.navigate(['shop-details/' + id]);
  }
}
