import { Injectable } from '@angular/core';
import { Book } from '../classes/book';
import { BookDetail } from '../classes/book-detail';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class BookService {

    private books : BookDetail[] = [ 
            new BookDetail("Angular JS", "Ken Williamson", 2013, 60), 
            new BookDetail("C#", "Jon Skeet", 2004, 65),
            new BookDetail("Type Script", "Steve Fenton", 2015, 50), 
            new BookDetail("Angular CLI", "Mike Brocchi", 2015, 48)
            ];

    getBooks(): Book[] {
        let returnBooks = this.books.slice(0, 2) as Book[];
        return returnBooks;
    }

    getMoreBooks(): Book[] {
        let returnBooks = this.books.slice(2, 4) as Book[];
        return returnBooks;
    }

    getBookDetails(bookName: string) : Observable<BookDetail> {
        let bookDetail = this.books.find(b => b.Name==bookName);
        return Observable.of(bookDetail);
    }
}

