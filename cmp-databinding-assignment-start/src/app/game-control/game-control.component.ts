import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter = 0;
  myInterval;
  @Output() intervalFired = new EventEmitter<number>()

  constructor() {
  }

  ngOnInit() {
  }

  onStartGame() {
    this.myInterval = setInterval(() => {
      this.intervalFired.emit(this.counter +1);
      this.counter++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.myInterval);
  }
}
