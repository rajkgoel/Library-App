import { Component } from '@angular/core';
import { BookService } from './services/bookService';
import { Book } from './classes/book';

@Component({
  selector: 'app-root',
  template: 
  `<h1>Sample App</h1>
    <div *ngFor="let book of Books">
      <div><h2>{{book.Name}} - {{book.Author | uppercase }}</h2></div>
    </div>
  `,
  styles: [`h1 { color: red } 
            h2 { font-size: 20px; color: blue }`],
  providers: [ BookService ]
})

export class AppComponent {
  Books: Book[];
  
  constructor(_sampleService: BookService)  {
    this.Books =  _sampleService.getBooks();
  }
}

