import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//  These are the components List injected
import { AppComponent } from './app.component';
import { FoodieCompComponent } from './foodie-comp/foodie-comp.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule(
  {
    declarations: [ AppComponent, FoodieCompComponent, ServerComponent, WarningAlertComponent, SuccessAlertComponent ],
    imports: [ BrowserModule, AppRoutingModule, FormsModule ],
    providers: [],
    bootstrap: [ AppComponent ]
  })
export class AppModule { }
