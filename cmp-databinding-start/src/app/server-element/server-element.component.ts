import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchanges called.');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngoninit called.');
    console.log('text content: ' + this.header.nativeElement.textContent);
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('after init called!');
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked() {
    console.log('after check called!');
  }

  ngAfterViewInit() {
    console.log('after view init called!');
    console.log('text content:xxxxxxxxx ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('after view check called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
