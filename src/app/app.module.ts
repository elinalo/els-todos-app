import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { TodosModule } from 'src/app/components/todos/todos.module';
import { NotificationsComponent } from './notifications/components/notifications.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoDetailsComponent } from './components/todos/components/todo-details/todo-details.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    TodosModule,
    NotificationsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
