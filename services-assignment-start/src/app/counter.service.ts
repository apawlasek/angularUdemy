import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {
  toActive = 0;
  toInactive = 0;

  constructor() {
  }

  countActive() {
    this.toActive++;
    console.log('Inactive to active toggles: ' + this.toActive);
  }

  countInactive() {
    this.toInactive++;
    console.log('Active to inactive toggles: ' + this.toInactive);
  }

}
