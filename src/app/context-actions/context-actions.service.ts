import { Injectable } from '@angular/core';
import { Portal } from '@angular/cdk/portal';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContextActionsService {

  private contextActionsPortalSubject = new BehaviorSubject(undefined);

  get contextActionsPortal$() {
    return this.contextActionsPortalSubject.asObservable();
  }

  setContextActions(portal: Portal<any>) {
    this.contextActionsPortalSubject.next(portal);
  }

  clearContextActions() {
    this.contextActionsPortalSubject.next(undefined);
  }
}
