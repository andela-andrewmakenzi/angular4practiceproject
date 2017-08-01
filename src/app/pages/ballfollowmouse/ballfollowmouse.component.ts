import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ballfollowmouse',
  templateUrl: './ballfollowmouse.component.html',
  styleUrls: ['./ballfollowmouse.component.scss']
})
export class BallfollowmouseComponent implements OnInit {

  @ViewChild('maindude', { read: ElementRef }) maindude: ElementRef;
  @ViewChild('ball', { read: ElementRef }) ball: ElementRef;

  obs = Observable.fromEvent(this.maindude.nativeElement, 'mousemove').map((e: MouseEvent) => {
      return {
          x: e.clientX,
          y: e.clientY
      }
  });

  constructor() { }

  move(value) {
      this.ball.nativeElement.style.left = value.x;
      this.ball.nativeElement.top.left = value.y;
  }

  ngOnInit() {
      this.obs.subscribe(
          this.move,
          error => { console.log(error);},
      );
  }

}
