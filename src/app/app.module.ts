import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppInput } from './app.input';

//@sth is "DECORATOR" (typescript feature)
@NgModule({
  declarations: [
    AppComponent,
    AppInput
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppInput]
})
export class AppModule { } // no content
