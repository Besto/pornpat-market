import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  rows = new Array();
  cols = new Array();

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

}
