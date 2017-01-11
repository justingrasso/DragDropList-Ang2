import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[accordian-item]',
  host: {
    '(dragstart)': 'dragstart($event)',
  }
})

export class DnDListItemDirective {

  constructor(private el: ElementRef) { }
  dragstart(ev: DragEvent) {
    ev.dataTransfer.setData('text', this.el.nativeElement.getAttribute('id'));
  }
}
