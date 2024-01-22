import { CommonModule, NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  standalone: true,
  imports: [CommonModule, NgIf, UpperCasePipe, FormsModule],
})
export class TodoDetails {
  @Input() todo?: Todo;
}
