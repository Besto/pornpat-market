import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  shopID;

  constructor(private router: ActivatedRoute) {
    const sub = this.router.params
                  .subscribe(params => {
                    this.shopID = params['id'];
                  });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.datatable = $('#shoplist-datatables').DataTable();
    this.refreshTable();
  }

  refreshTable() {
    this.datatable.columns('.address').visible( this.showAddress );
    this.datatable.columns('.contact').visible( this.showContact );
    this.datatable.columns('.shop_type').visible( this.showShopType );
    this.datatable.columns('.number_of_shop').visible( this.showNumberOfShop );
  }

  showShopDetail(id) {
    $('#shop-details-tab').click();
    this.shopID = id;
  }
}
