import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextActionsModule } from './context-actions/context-actions.module';
import { ContextTitleModule } from './context-title/context-title.module';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const shared = [
  // Angular
  FormsModule,
  ReactiveFormsModule,

  // Custom
  ContextActionsModule,
  ContextTitleModule,

  // Material
  MatToolbarModule,
  MatButtonModule,
  MatTabsModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...shared
  ],
  exports: [
    ...shared
  ]
})
export class SharedModule {}
