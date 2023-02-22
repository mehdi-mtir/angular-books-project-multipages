import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  private books = [
    new Book(1, "The slight edge", "Jeff Olsen", 40),
    new Book(2, "Power of habits", "Charles Duhigg", 30),
    new Book(3, "The one thing", "Gary W. Keller", 20)
  ];

  constructor() { }

  getBooks() : Book[]{
    return [...this.books];
  }

  getBookById(id : number) : Book{
    return this.books.find(b=>b.id === id);
  }

  addBook(book : Book){
    this.books = [...this.books, book];
  }

  editBook(book : Book){
    this.books = this.books.map(
      b=>{
        if(b.id === book.id)
          return book;
        else
          return b;
      }
    )
  }

  deleteBook(id : number){
    this.books = this.books.filter(
      b=>b.id !== id
    )
  }


  getLastId(){
    return this.books[this.books.length - 1].id;
  }

}
