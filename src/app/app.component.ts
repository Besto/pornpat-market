import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page = 'dashboard';

  constructor(private router: Router) {

  }

  gotoPage(page) {
    this.page = page;
    this.router.navigate([page]);
  }
}
