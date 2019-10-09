import { AfterViewInit, Component, EmbeddedViewRef, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ContextTitleService } from './context-title.service';

@Component({
  selector: 'app-context-title-portal',
  templateUrl: './context-title-portal.component.html',
  styleUrls: ['./context-title-portal.component.scss']
})
export class ContextTitlePortalComponent implements AfterViewInit, OnDestroy {

  @ViewChild('viewContainer', { read: ViewContainerRef, static: false })
  viewContainer: ViewContainerRef;
  template: EmbeddedViewRef<any>;
  templateRef$: Subscription;
  hasTemplate: boolean;

  constructor(private contextTitleService: ContextTitleService) {
  }

  ngAfterViewInit() {
    this.templateRef$ = this.contextTitleService.templateRef
                            .pipe(delay(0))
                            .subscribe(tmpl => {
                              if (this.template) {
                                this.template.destroy();
                              }
                              if (tmpl) {
                                this.template = this.viewContainer.createEmbeddedView(tmpl);
                              }
                              this.hasTemplate = !!tmpl;
                            });
  }

  ngOnDestroy(): void {
    this.templateRef$.unsubscribe();
  }

}
