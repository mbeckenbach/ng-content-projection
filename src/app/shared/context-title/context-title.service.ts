import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextTitleService {

  templateRef = new BehaviorSubject<TemplateRef<any>>(null);

  constructor() {
  }
}
