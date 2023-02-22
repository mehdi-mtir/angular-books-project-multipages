import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {
  book : Book;

  constructor(
    private activatedRoute : ActivatedRoute,
    private bookService : BooksService,
    private router : Router) { }

  editBook(f : NgForm){
    this.bookService.editBook(this.book);
    this.router.navigate(["/books"]);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      parameters=>{
        //console.log(parameters['id']);
        this.book = this.bookService.getBookById(+parameters['id']);
      }
    )

  }

}
