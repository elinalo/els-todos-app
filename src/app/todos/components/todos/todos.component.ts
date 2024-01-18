import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Todo } from '../../models/todo.model';
import { TodoDetails } from '../todo-details/todo-details.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TodoDetails, FormsModule],
})
export class TodosComponent {
  // TODO: pass input value into todo-details.component

  public text: string = '';
  public todo: Todo = {
    id: 0,
    title: 'test todo',
    // description:     // TODO: add description
  };

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
    console.log('target.value', target.value); // TODO: rename for console logs or remove
  }

  addTodo(): void {
    console.log('addTodo', this.text);
  }
}
