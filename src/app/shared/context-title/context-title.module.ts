import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextTitleComponent } from './context-title.component';
import { ContextTitlePortalComponent } from './context-title-portal.component';
import { ContextTitleDirective } from './context-title.directive';


@NgModule({
  declarations: [
    ContextTitleComponent,
    ContextTitlePortalComponent,
    ContextTitleDirective
  ],
  exports: [
    ContextTitleComponent,
    ContextTitlePortalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContextTitleModule {}
