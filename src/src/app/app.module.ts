import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { SetsComponent } from './components/sets/sets.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModules} from './material-modules';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SetsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
