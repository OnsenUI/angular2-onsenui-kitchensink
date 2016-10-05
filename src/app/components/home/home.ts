import {Component} from '@angular/core';
import {OnsNavigator} from 'angular2-onsenui';

import {PullHook} from './demos/pull-hook';
import {LazyRepeat} from './demos/lazy-repeat';
import {Splitter} from './demos/splitter';
import {Fab} from './demos/fab';
import {SpeedDial} from './demos/speed-dial';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
})
export class Home {

  constructor(private _navigator : OnsNavigator) {
  }

  log(){
    console.log(this._navigator);
  }

  push(page) {
    var component = { PullHook, LazyRepeat, Splitter, Fab, SpeedDial }[page];
    this._navigator.element.pushPage(component,  {animation: 'fade '}, {})
  }

  ngOnInit() {

  }

}
