import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [
    { path: ['home'], label: 'Home' },
    { path: ['page-one'], label: 'Page One' },
    { path: ['page-two'], label: 'Page Two' },
  ];
}
