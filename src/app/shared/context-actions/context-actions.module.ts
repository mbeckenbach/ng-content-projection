import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextActionsComponent } from './context-actions.component';
import { ContextActionsPortalComponent } from './context-actions-portal.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    ContextActionsComponent,
    ContextActionsPortalComponent
  ],
  exports: [
    ContextActionsComponent,
    ContextActionsPortalComponent
  ],
  imports: [
    CommonModule,

    // CDK
    PortalModule
  ]
})
export class ContextActionsModule {}
