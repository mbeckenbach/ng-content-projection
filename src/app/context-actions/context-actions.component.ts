import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { ContextActionsService } from './context-actions.service';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-context-actions',
  templateUrl: './context-actions.component.html',
  styleUrls: ['./context-actions.component.scss']
})
export class ContextActionsComponent implements AfterViewInit, OnDestroy {

  @ViewChild('actionsTemplate', { static: false }) actionsTemplate: TemplateRef<any>;

  constructor(private contextActionsService: ContextActionsService) { }

  ngAfterViewInit() {
    this.contextActionsService.setContextActions(new TemplatePortal(this.actionsTemplate, undefined, {}));
  }

  ngOnDestroy() {
    this.contextActionsService.clearContextActions();
  }

}
