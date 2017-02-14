import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './book-details.component';
import { RouterModule }   from '@angular/router';
import { BookService } from './services/bookService';

@NgModule({
  declarations: [ AppComponent, BooksComponent, BookDetailsComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'app-root',
        component: AppComponent
      },
      {
        path: '',
        component: BooksComponent
      },
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'details/:name',
        component: BookDetailsComponent
      }
    ])
  ],
  providers: [ BookService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
