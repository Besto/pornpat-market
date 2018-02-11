import { Component, OnInit } from '@angular/core';
import { ShopDetail } from '../../model/shop-detail';

declare var firebase: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  rows = new Array();
  cols = new Array();
  shopsMap = {};

  constructor() { }

  ngOnInit() {
    const startText = 'A';
    for (let i = 0; i < 20; i++) {
      this.cols.push(String.fromCharCode((startText.charCodeAt(0) + i)));
    }

    for (let i = 1; i < 10; i++) {
      this.rows.push(i);
    }
  }

  ngAfterViewInit() {
    const db = firebase.firestore();
    let shopDetail: ShopDetail;
    db.collection('shop-details').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        shopDetail = doc.data();
        this.shopsMap[shopDetail.position.column + shopDetail.position.row] = shopDetail;
      });
      console.log(this.shopsMap);
    });
  }

}
