import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  searchTerm: string;

  constructor() { }

  ngOnInit() {
  }

  clearSearch() {
    this.searchTerm = undefined;
  }
}
