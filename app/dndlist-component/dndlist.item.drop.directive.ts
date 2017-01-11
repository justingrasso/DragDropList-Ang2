import{Directive, ElementRef} from '@angular/core';

@Directive({
  selector:'[list-item-drop]',
  host:{
    '(drop)':'drop($event)',
    '(dragover)':'allowDrop($event)'
  }
})

export class DnDListItemDropDirective{
  constructor(private el:ElementRef){}
    drop(ev:DragEvent){
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    this.el.nativeElement.appendChild(document.getElementById(data));
  }
  allowDrop(ev:DragEvent){
    ev.preventDefault();
  }
}
