import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { TodosModule } from 'src/app/todos/todos.module';
import { NotificationsComponent } from './notifications/components/notifications.component';
import { HeaderComponent } from './todos/components/header/header.component';

@NgModule({
  declarations: [AppComponent],
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
