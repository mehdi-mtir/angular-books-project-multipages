import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './books/add-books/add-books.component';
import { EditBooksComponent } from './books/edit-books/edit-books.component';
import { ListBooksComponent } from './books/list-books/list-books.component';

const routes: Routes = [
  {path:"books", component:ListBooksComponent},
  {path:"books/add", component:AddBooksComponent},
  {path:"books/edit/:id", component:EditBooksComponent},
  {path:"", redirectTo:"books", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
