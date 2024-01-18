import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Todo } from '../../models/todo.model';
import { TodoDetails } from '../todo-details/todo-details.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TodoDetails],
})
export class TodosComponent {
  public text: string = '';

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
    console.log('target.value', target.value); // TODO: rename for console logs or remove
  }

  addTodo(): void {
    console.log('addTodo', this.text);
  }
}
