import { Component } from '@angular/core';
import { ContextActionsService } from './context-actions.service';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-context-actions-portal',
  templateUrl: './context-actions-portal.component.html',
  styleUrls: ['./context-actions-portal.component.scss']
})
export class ContextActionsPortalComponent {

  hasTemplate$ = this.contextActionsService.contextActionsPortal$
                     .pipe(
                       map(portal => !!portal),
                       delay(0)
                     );

  constructor(private contextActionsService: ContextActionsService) { }

}
