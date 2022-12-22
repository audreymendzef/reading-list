import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { BooksComponent } from './components/books/books.component';
import { BookItemComponent } from './components/book-item/book-item.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ButtonComponent, BooksComponent, BookItemComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
