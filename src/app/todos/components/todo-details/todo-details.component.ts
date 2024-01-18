import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TodoDetails {
  public todo: Todo = {
    id: 0,
    title: 'test todo',
    // description:     // TODO: add description
  };
}
