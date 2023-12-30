import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent
  ],    
  templateUrl: './todos.component.html',
})
export class TodosComponent { }
