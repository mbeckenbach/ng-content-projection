import { Component } from '@angular/core';
import { appRoutes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = appRoutes
    .filter(route => route.data && route.data.label)
    .map(route => {
      return {
        path: [route.path],
        label: route.data.label
      };
    });
}
