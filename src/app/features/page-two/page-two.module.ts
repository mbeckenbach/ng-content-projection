import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTwoRoutingModule } from './page-two-routing.module';
import { PageTwoComponent } from './page-two.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    PageTwoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageTwoRoutingModule,
  ]
})
export class PageTwoModule {}
