import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Todo } from '../../models/todo.model';
import { TodoDetails } from '../todo-details/todo-details.component';
import { FormsModule } from '@angular/forms';
import { TODOS } from 'src/app/mock-data/mock-todos';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TodoDetails,
    FormsModule,
    NgFor,
    NgIf,
  ],
})
export class TodosComponent implements OnInit {
  public text: string = '';
  public todosHeader: string = `Todo's`;
  public todos: Todo[] = [];
  public selectedTodo?: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
    console.log('target.value', target.value); // TODO: rename for console logs or remove
  }

  addTodo(): void {
    console.log('addTodo', this.text);
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }
}
