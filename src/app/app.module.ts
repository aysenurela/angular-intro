import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackBarComponent } from "./snackbar/snackbar.component"

//@sth is "DECORATOR" (typescript feature)
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent, TodosComponent, SnackBarComponent]
})
export class AppModule { } // no content
