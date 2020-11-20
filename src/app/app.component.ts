import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerHeight = 0
  footerHeight = 0
  ngOnInit() {
    this.headerHeight = document.getElementById('header').offsetHeight
    this.footerHeight = document.getElementById('footer').offsetHeight
  }
}
