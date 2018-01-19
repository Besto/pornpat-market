import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  datatable;
  years = [];
  months = [
    { 'id' : 1 , 'name': 'January'},
    { 'id' : 2 , 'name': 'Febuary'},
    { 'id' : 3, 'name': 'March'},
    { 'id' : 4, 'name': 'April'},
    { 'id' : 5, 'name': 'May'},
    { 'id' : 6, 'name': 'June'},
    { 'id' : 7, 'name': 'July'},
    { 'id' : 8, 'name': 'August'},
    { 'id' : 9, 'name': 'September'},
    { 'id' : 10, 'name': 'October'},
    { 'id' : 11, 'name': 'November'},
    { 'id' : 12 , 'name': 'December'}
  ];

  constructor() { }

  ngOnInit() {
    const startYear = 2018;
    const thisYear = new Date().getFullYear();
    for (let i = startYear; i <= thisYear; i++) {
      this.years.push(i);
    }
  }

  ngAfterViewInit() {
    $('#payment-datatables').DataTable();
  }

  showShopDetail(id) {

  }
}
