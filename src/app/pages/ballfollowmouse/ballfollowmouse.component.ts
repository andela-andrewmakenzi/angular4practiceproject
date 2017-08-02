import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
declare const document: any;

@Component({
  selector: 'app-ballfollowmouse',
  templateUrl: './ballfollowmouse.component.html',
  styleUrls: ['./ballfollowmouse.component.scss']
})
export class BallfollowmouseComponent implements OnInit {
    @ViewChild('ball') ball: ElementRef;

    obs = Observable.fromEvent(document, 'mousemove').map((val: any) => {
        return {
            x: val.clientX,
            y: val.clientY
        };
    });

    constructor() {}

    ngOnInit() {
        this.obs.subscribe(
            val => {
                this.ball.nativeElement.style.top = val.y + 'px';
                this.ball.nativeElement.style.left = val.x + 'px';
            },
            error => {}
        );
    }

}
