import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private originalColor = "";

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#ddefef');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.originalColor);
  }

  constructor(private el: ElementRef) {
    this.originalColor = el.nativeElement.style.backgroundColor;
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
