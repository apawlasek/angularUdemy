import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAllertComponent } from './warning-allert/warning-allert.component';
import { SuccessAllertComponent } from './success-allert/success-allert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAllertComponent,
    SuccessAllertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
