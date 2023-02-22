import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBooksComponent } from './list-books/list-books.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { EditBooksComponent } from './edit-books/edit-books.component';



@NgModule({
  declarations: [
    ListBooksComponent,
    AddBooksComponent,
    EditBooksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListBooksComponent
  ]
})
export class BooksModule { }
