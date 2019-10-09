import { Component } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {

  searchTerm: string;

  clearSearch() {
    this.searchTerm = undefined;
  }
}
