import { Component, computed, signal, Input, input } from '@angular/core';
import { DUMMY_USERS } from '../../dummy.users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) userimage!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  userimage = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();

  //userdata = DUMMY_USERS[randomIndex];
  // userdata = signal(DUMMY_USERS[randomIndex]);
  // userimages = computed(() => '/assets/users/' + this.userdata().avatar);
  get userimagepath() {
    return '/assets/users/' + this.userimage();
  }
  // userbuttonclicked() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.userdata.set(DUMMY_USERS[randomIndex]);
  //   //this.userdata = DUMMY_USERS[randomIndex];
  // }
}
