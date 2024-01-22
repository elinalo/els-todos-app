import { Injectable } from '@angular/core';
import { Todo } from 'src/app/todos/models/todo.model';
import { TODOS } from 'src/app/mock-data/mock-todos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos(): Observable<Todo[]> {
    // of(TODOS) returns an Observable<Todo[]> that emits a single value, the array of mock todos
    const todos = of(TODOS);
    return todos;
  }
}
