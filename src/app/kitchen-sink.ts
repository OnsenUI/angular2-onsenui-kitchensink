import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {ONS_DIRECTIVES} from 'angular2-onsenui';

import {Home} from './components/home/home';
import {Animations} from './components/animations/animations';
import {Forms} from './components/forms/forms';
import {Dialogs} from './components/dialogs/dialogs';
import {Tabbar} from './components/tabbar/tabbar';

@Component({
  selector: 'kitchen-sink',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES, Tabbar, ONS_DIRECTIVES],
  templateUrl: 'app/kitchen-sink.html',
})
@Routes([
  { path: '/home',       component: Home,       },
  { path: '/forms',      component: Forms,      },
  { path: '/dialogs',    component: Dialogs,    },
  { path: '/animations', component: Animations, },
])
export class KitchenSink {

  constructor() {}

}
