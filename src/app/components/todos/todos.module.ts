import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from 'src/app/components/todos/components/todos/todos.component';
import { HeaderComponent } from '../header/header.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { NotificationService } from '../../notifications/notification.service';

// const routes: Routes = [
//   {
//     path: '',
//     component: TodosComponent,
//   },
// ];

@NgModule({
  declarations: [],
  imports: [RouterModule, TodosComponent, TodoDetailsComponent],
})
export class TodosModule {
  constructor() {}
}
