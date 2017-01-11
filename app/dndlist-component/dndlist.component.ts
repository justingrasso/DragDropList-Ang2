import {Component,ViewChild,ViewChildren,Renderer,ElementRef,AfterViewInit,QueryList,Directive} from '@angular/core';
import {DnDListItemComponent} from '../dndlist-component/dndlist.item.component';
import {DnDListItemDropDirective} from '../dndlist-component/dndlist.item.drop.directive';
@Component({
  selector:'dnd-list',
  templateUrl:'./dndlist.component.html',
  styleUrls:['./dndlist.component.css']
})

export class DnDListComponent implements AfterViewInit{

  @ViewChildren(DnDListItemComponent) itemList: QueryList<DnDListItemComponent>

  ngAfterViewInit(){
    console.log(this.itemList.first);
  }
}
