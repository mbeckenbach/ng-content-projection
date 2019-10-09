import { AfterViewInit, Directive, OnDestroy, TemplateRef } from '@angular/core';
import { ContextTitleService } from './context-title.service';

@Directive({
  selector: '[appContextTitle]'
})
export class ContextTitleDirective implements OnDestroy, AfterViewInit {

  constructor(
    private tmpl: TemplateRef<any>,
    private contextTitleService: ContextTitleService
  ) {
  }

  ngAfterViewInit(): void {
    this.contextTitleService.templateRef.next(this.tmpl);
  }

  ngOnDestroy(): void {
    this.contextTitleService.templateRef.next(null);
  }

}
