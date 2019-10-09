import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { ContextActionsPortalComponent } from './context-actions/context-actions-portal.component';
import { PortalModule } from '@angular/cdk/portal';
import { ContextActionsComponent } from './context-actions/context-actions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageOneComponent,
    PageTwoComponent,
    ContextActionsPortalComponent,
    ContextActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
