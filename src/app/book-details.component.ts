import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { BookService } from './services/bookService';
import { BookDetail } from './classes/book-detail';

@Component({
  selector: 'details',
  templateUrl: 'book-details.component.html',
  styleUrls: ['app.component.css']
})

export class BookDetailsComponent implements OnInit {
  bookDetail: BookDetail;
  
  constructor(private bookService: BookService,
                private route: ActivatedRoute,
                private location: Location)  {
  }

  ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.bookService.getBookDetails(params['name']))
            .subscribe(book => this.bookDetail = book);
  }

  goBack(): void {
    this.location.back();
  }
}

