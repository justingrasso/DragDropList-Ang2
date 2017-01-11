import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {DnDListComponent} from './dndlist-component/dndlist.component';
import {DnDListItemComponent} from './dndlist-component/dndlist.item.component';
import {DnDListItemDirective} from './dndlist-component/dndlist.item.directive';
import {DnDListItemDropDirective} from './dndlist-component/dndlist.item.drop.directive';


@NgModule({
  declarations: [
    AppComponent,
    DnDListComponent,
    DnDListItemComponent,
    DnDListItemDirective,
    DnDListItemDropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
