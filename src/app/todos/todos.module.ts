import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodosComponent } from "src/app/todos/components/todos/todos.component";
import { HeaderComponent } from "./components/header/header.component";

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    HeaderComponent,
    TodosComponent, 
    RouterModule.forChild(routes),
  ],
})
export class TodosModule {

  constructor() { }

}
