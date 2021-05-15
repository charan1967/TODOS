import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './mycomponent/about/about.component';
import { ToDoComponent } from './mycomponent/todos/todos.component';

const routes: Routes = [
  { path: '', component: ToDoComponent },
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
