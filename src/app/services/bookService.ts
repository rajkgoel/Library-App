import { Injectable } from '@angular/core';
import { Book } from '../classes/book';

@Injectable()
export class BookService {

    getBooks(): Book[] {
        let books = [ 
            new Book("Angular JS", "Ken Williamson", 2013), 
            new Book("C#", "Jon Skeet", 2004)
            ];
       return books;
    }

    getMoreBooks(): Book[] {
        let books = [ 
            new Book("Type Script", "Steve Fenton", 2015), 
            new Book("Angular CLI", "Mike Brocchi", 2015)
            ];
       return books;
    }
}

