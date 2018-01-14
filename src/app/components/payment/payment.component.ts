import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  datatable;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('#payment-datatables').DataTable();
  }

}
