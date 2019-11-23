import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmaCalcComponent } from './bma-calc/bma-calc.component';
import { BmaHistoryComponent } from './bma-history/bma-history.component';
import { BmaComponent } from './bma/bma.component';

@NgModule({
  declarations: [
    AppComponent,
    BmaCalcComponent,
    BmaHistoryComponent,
    BmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
