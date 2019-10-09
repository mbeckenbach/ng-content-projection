import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { PageOneComponent } from './page-one.component';
import { PageOneRoutingModule } from './page-one-routing.module';


@NgModule({
  declarations: [
    PageOneComponent
  ],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    SharedModule,
  ]
})
export class PageOneModule {}
