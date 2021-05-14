import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './mycomponent/todos/todos.component';
import { ToDoItemComponent } from './mycomponent/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
