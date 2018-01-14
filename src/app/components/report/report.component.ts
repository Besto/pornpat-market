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

  constructor() { }

  ngOnInit() {
      const startYear = 2018;
      const thisYear = new Date().getFullYear();
      for (let i = startYear; i <= thisYear; i++) {
        this.years.push(i);
      }
  }

  ngAfterViewInit() {
    $('#datatables').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search records",
        }

    });

    $('.selectpicker').selectpicker();


    // var table = $('#datatables').DataTable();

    // // Edit record
    // table.on('click', '.edit', function() {
    //     $tr = $(this).closest('tr');

    //     var data = table.row($tr).data();
    //     alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
    // });

    // // Delete a record
    // table.on('click', '.remove', function(e) {
    //     $tr = $(this).closest('tr');
    //     table.row($tr).remove().draw();
    //     e.preventDefault();
    // });

    // //Like record
    // table.on('click', '.like', function() {
    //     alert('You clicked on Like button');
    // });

    // $('.card .material-datatables label').addClass('form-group');

  }

}
