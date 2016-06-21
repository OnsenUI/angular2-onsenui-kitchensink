import {Component, Inject, forwardRef} from '@angular/core';
import {OnsNavigator, OnsPage} from 'angular2-onsenui';
import {PullHook} from './demos/pull-hook';
import {LazyRepeat} from './demos/lazy-repeat';
import {Splitter} from './demos/splitter';
import {Fab} from './demos/fab';
import {SpeedDial} from './demos/speed-dial';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  providers: [],
  directives: [],
  pipes: []
})
export class Home {

  constructor(@Inject(forwardRef(() => OnsNavigator)) private _navigator : OnsNavigator) {
  }

  log(){
    console.log(this._navigator);
  }

  push(page) {
    var component = { PullHook, LazyRepeat, Splitter, Fab, SpeedDial }[page];
    this._navigator.pushComponent(component,  {animation: 'fade '}, {})
  }

  ngOnInit() {

  }

}
