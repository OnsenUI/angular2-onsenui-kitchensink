import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'tabbar',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/components/tabbar/tabbar.html',
  styleUrls: ['app/components/tabbar/tabbar.css'],
})
export class Tabbar {
  tabs: Array<any>;
  material: boolean;

  constructor() {
    this.tabs = [
      { path: '/home',       label: 'Home',       },
      { path: '/forms',      label: 'Forms',      },
      { path: '/dialogs',    label: 'Dialogs',    },
      { path: '/animations', label: 'Animations', },
    ];
    this.material = ons.platform.isAndroid();
  }

  updateStyle(platform: string) {
    this.material = platform === 'android';
  }

}
