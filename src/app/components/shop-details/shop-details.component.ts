import { Component, OnInit } from '@angular/core';
import { ShopDetail } from '../../model/shop-detail';
import { FormGroup, FormControl } from '@angular/forms';

declare var firebase: any;

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {

  shopDetail: ShopDetail;
  shopDetailForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.shopDetailForm = new FormGroup ({
      id: new FormControl(),
      status: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      type: new FormControl(),
      amount: new FormControl(),
      category: new FormControl(),
      product: new FormControl(),
      address: new FormControl(),
      tel: new FormControl(),
      email: new FormControl(),
      lineID: new FormControl(),
      storage: new FormControl(),
      size: new FormControl(),
      position: new FormGroup({
          row: new FormControl(),
          column: new FormControl(),
      })
   });
  }

  saveShopDetail() {
    const shopDetail = this.shopDetailForm.value;
    console.log(shopDetail);
    this.saveToFirebaseDB('shop-details', shopDetail);
    alert('save successful');
  }

  saveToFirebaseDB(collection, object) {
    const db = firebase.firestore();
    db.collection(collection).add(
      object
    );
  }
}
