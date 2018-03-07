import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .color {
    color: white;
  }`]
})
export class AppComponent {
  showParagraph = false;
  clickLogs = [];
  clickLogsCount = 0;


  onShowParagraph() {
    this.showParagraph = !this.showParagraph;
    console.log(this.showParagraph);
  }

  onClickLogs() {
    this.clickLogsCount++;
    this.clickLogs.push(new Date());
  }
}
