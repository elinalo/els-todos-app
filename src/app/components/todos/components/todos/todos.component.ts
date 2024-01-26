import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../../models/todo.model';
import { TodoDetailsComponent } from '../todo-details/todo-details.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../todo.service';
import { NotificationService } from 'src/app/notifications/notification.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TodoDetailsComponent,
    FormsModule,
    NgFor,
    NgIf,
    RouterModule,
  ],
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService
      .getTodos()
      .subscribe((todos: Todo[]) => (this.todos = todos));
  }
}
