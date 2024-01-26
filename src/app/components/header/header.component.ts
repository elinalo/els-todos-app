import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";


@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent {
  constructor() {}

  public todosHeader: string = `el's todos`;
}