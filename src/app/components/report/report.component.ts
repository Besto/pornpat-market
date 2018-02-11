import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

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

  totalSummaryRevenue = 10000;
  totalSummaryRevenueLastMonth = 20000;
  showReport = '';
  reportType = '';

  constructor() { }

  ngOnInit() {
      const startYear = 2018;
      const thisYear = new Date().getFullYear();
      for (let i = startYear; i <= thisYear; i++) {
        this.years.push(i);
      }
  }

  ngAfterViewInit() {
    $('#sum-report').DataTable({
        buttons: [
          'copyHtml5',
          'excelHtml5',
          'csvHtml5',
          'pdfHtml5'
        ],
        "aaSorting": [],
        "paging": false,
        "info": false,
        "bFilter": false
    });

    $('#seperate-report').DataTable({
        buttons: [
          'copyHtml5',
          'excelHtml5',
          'csvHtml5',
          'pdfHtml5'
        ],
        "aaSorting": [],
        "paging": false,
        "info": false,
        "bFilter": false
    });

    $('.selectpicker').selectpicker();
  }

  submitSearch() {
    this.showReport = this.reportType;
    console.log(this.showReport);
  }

  randomNumber() {
    return Math.round(Math.random() * 10);
  }

}
