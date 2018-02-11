import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShopDetail } from '../../model/shop-detail';

declare var $: any;
declare var firebase: any;

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
  shops = new Array();

  constructor(private router: ActivatedRoute) {
    const sub = this.router.params
                  .subscribe(params => {
                    this.shopID = params['id'];
                  });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const db = firebase.firestore();
    let shopDetail: ShopDetail;
    db.collection('shop-details').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        shopDetail = doc.data();
        this.shops.push(shopDetail);
      });
      console.log(this.shops);
    });

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
