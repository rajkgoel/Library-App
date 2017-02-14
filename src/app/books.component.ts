import { Component } from '@angular/core';
import { BookService } from './services/bookService';
import { Book } from './classes/book';

@Component({
  selector: 'books',
  templateUrl: 'books.component.html',
  styleUrls: ['app.component.css']
})

export class BooksComponent {
  pageTitle: string = "Library";
  Books: Book[];
  
  constructor(private _bookService: BookService)  {
    this.Books =  _bookService.getBooks();
  }

  getMoreBooks() : void {
    this.Books = this.Books.concat(this._bookService.getMoreBooks());
  }
}
