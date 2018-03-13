import {Component, OnInit} from '@angular/core';
import {User, UsersService} from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users: User[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users = this.usersService.users;
  }

  onToggleStatus(name: string) {
    this.usersService.toggleStatus(name);
  }

}
