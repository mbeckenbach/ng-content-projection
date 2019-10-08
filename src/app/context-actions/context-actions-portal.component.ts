import { Component, OnInit } from '@angular/core';
import { ContextActionsService } from './context-actions.service';

@Component({
  selector: 'app-context-actions-portal',
  templateUrl: './context-actions-portal.component.html',
  styleUrls: ['./context-actions-portal.component.scss']
})
export class ContextActionsPortalComponent implements OnInit {

  constructor(private contextActionsService: ContextActionsService) { }

  ngOnInit() {
  }

}
