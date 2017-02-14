import { Component } from '@angular/core';
import { BookService } from './services/bookService';
import { Book } from './classes/book';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ ]
})

export class AppComponent {
  pageTitle: string = "Library";
  Books: Book[];
  
  constructor(private _bookService: BookService)  {
    this.Books =  _bookService.getBooks();
  }

  getMoreBooks() : void {
    this.Books = this.Books.concat(this._bookService.getMoreBooks());
  }
}

