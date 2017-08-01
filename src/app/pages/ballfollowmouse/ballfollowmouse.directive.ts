import { Directive, HostListener, ViewChild, ElementRef} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Directive({ selector: '[appFollowPointer]' })
export class FollowMouseDirective {

    constructor(private element: ElementRef) { }

    @HostListener('mousemove') onmousemove(): void {
        console.log(this.element.nativeElement.value);
    }
}
