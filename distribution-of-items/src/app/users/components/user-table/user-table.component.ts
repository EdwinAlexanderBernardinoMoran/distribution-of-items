import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.interfaces';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styles: [
  ]
})
export class UserTableComponent {
  @Input()
  public users: User[] = []
}
