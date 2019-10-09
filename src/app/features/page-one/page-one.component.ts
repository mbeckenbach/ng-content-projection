import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {

  searchTerm: string;

  pageTitle = this.route.snapshot.data.label;

  constructor(private route: ActivatedRoute) {}

  clearSearch() {
    this.searchTerm = undefined;
  }
}
