import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy.users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userdata = DUMMY_USERS[1];

  get userimagepath() {
    return '/assets/users/' + this.userdata.avatar;
  }

  userbuttonclicked() {
    console.log('Button Clicked');
  }
}
