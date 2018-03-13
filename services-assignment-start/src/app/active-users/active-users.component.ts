import {Component, OnInit} from '@angular/core';
import {User, UsersService} from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
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
