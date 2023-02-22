import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit, OnDestroy {
  books : Book[];

  constructor(private bookService : BooksService) { }

  deleteBook(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer le livre?")){
      this.bookService.deleteBook(id);
      console.log(this.bookService.getBooks());
    }
  }

  ngOnDestroy() : void{
    this.bookService.booksUpdated.unsubscribe();
    console.log("unsubsribed...")
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.bookService.booksUpdated.subscribe(
      books => this.books = books
    )
  }

}
