import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications: string[] = [];

  public add(notification: string) {
    this.notifications.push(notification);
  }

  public clear() {
    this.notifications = [];
  }
}
