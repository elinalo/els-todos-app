import { Injectable } from '@angular/core';
import { Todo } from 'src/app/todos/models/todo.model';
import { TODOS } from 'src/app/mock-data/mock-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos(): Todo[] {
    return TODOS;
  }
}
