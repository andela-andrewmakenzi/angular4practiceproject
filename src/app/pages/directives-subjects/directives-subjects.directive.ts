import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() color: string;
  colorSubject = new Subject<string>(); // produces an observable data stream
  obs = this.colorSubject.asObservable().debounceTime(400).distinctUntilChanged();

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
      this.obs.subscribe(color => this.changeColor(color));
  }

  @HostListener('keyup') onKeyUp() {
      this.colorSubject.next(this.element.nativeElement.value); // put new item in the observable stream
  }

  private changeColor(color: string): void {
      this.element.nativeElement.style.border = `10px solid ${color}`;
  }
}
