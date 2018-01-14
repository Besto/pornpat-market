import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private router: ActivatedRoute) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.selectpicker').selectpicker();
  }

}
