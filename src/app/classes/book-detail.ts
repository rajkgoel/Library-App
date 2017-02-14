import { Book } from '../classes/book';

export class BookDetail extends Book {
    
    constructor(
        public Name: string, 
        public Author: string, 
        public PublicationYear: number, 
        public Price: number)
    {
        super (Name, Author, PublicationYear);
    }
}