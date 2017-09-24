import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.unhighlight();
  }

  private unhighlight() {
    this.el.nativeElement.style.backgroundColor = "rgba(238, 178, 17,.7)";
    this.el.nativeElement.style.color = "#00254c";
  }
  
  private highlight() {
    this.el.nativeElement.style.backgroundColor = "#00254c";
    this.el.nativeElement.style.color = "rgba(238, 178, 17,.7)";
  }
}
