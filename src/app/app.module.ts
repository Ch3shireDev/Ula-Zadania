import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SymbolToDataComponent } from './symbol-to-data/symbol-to-data.component';
import { StartComponent } from './start/start.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SymbolToDataComponent, StartComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
