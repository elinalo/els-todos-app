import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoDetails } from './components/todo-details/todo-details.component';
import { NotificationService } from '../notifications/notification.service';

// const routes: Routes = [
//   {
//     path: '',
//     component: TodosComponent,
//   },
// ];

@NgModule({
  declarations: [],
  imports: [
    //TodosComponent,
    // RouterModule.forChild(routes),
    //TodoDetails,
  ],
})
export class TodosModule {
  constructor() {}
}
