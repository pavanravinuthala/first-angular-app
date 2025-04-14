import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy.users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';
  users = signal(DUMMY_USERS);
}
