import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {

  @Input() color: string;

  constructor(private element: ElementRef) { }

  @HostListener('keyup') onKeyUp() {
      this.changeColor(this.color);
  }

  private changeColor(color: string) {
      this.element.nativeElement.style.border = `3px solid ${color}`;
  }
}
