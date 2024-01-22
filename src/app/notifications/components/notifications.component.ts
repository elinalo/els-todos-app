import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  standalone: true,
  imports: [CommonModule, NgIf],
})
export class NotificationsComponent {
  constructor(public notificationService: NotificationService) {}
}
