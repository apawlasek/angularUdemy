import { Injectable } from '@angular/core';
import {CounterService} from './counter.service';

export interface User {
  name: string;
  status: 'active' | 'inactive';
}

@Injectable()
export class UsersService {
  users: User[] = [
    {
      name: 'Max',
      status: 'active'
    },
    {
      name: 'Anna',
      status: 'inactive'
    },
    {
      name: 'Chris',
      status: 'inactive'
    },
    {
      name: 'Manu',
      status: 'inactive'
    }
  ];

  constructor(private counterService: CounterService) {}

    toggleStatus(name: string) {
     const userIndex = this.users.findIndex((user) => user.name === name);

      if (this.users[userIndex].status === 'active') {
        this.users[userIndex].status = 'inactive';
        this.counterService.countInactive();
      } else if (this.users[userIndex].status === 'inactive') {
        this.users[userIndex].status = 'active';
        this.counterService.countActive();
      }
    }


}
