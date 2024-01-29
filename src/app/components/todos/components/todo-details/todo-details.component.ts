import { CommonModule, NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Todo } from '../../../../models/todo.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  standalone: true,
  imports: [CommonModule, NgIf, UpperCasePipe, FormsModule],
})
export class TodoDetailsComponent {
  public todo: Todo | undefined;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id).subscribe((todo) => (this.todo = todo));
  }
}
