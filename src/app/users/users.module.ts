import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    ListUsersComponent,
    AddUsersComponent,
    EditUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
