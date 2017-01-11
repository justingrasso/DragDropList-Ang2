import {Component} from '@angular/core';
import {DnDListItemDirective} from './dndlist.item.directive';

@Component({
  selector: 'list-item',
  template:`<li draggable="true" #myButton *ngFor='let item of itemList; let i = index' id={{i}} accordian-item>{{item.text}}</li>`
})

export class DnDListItemComponent{
itemList:any = [{'text':'item 1'},{'text':'item 2'}];
}
