import {Component, Inject, forwardRef} from '@angular/core';
import {OnsNavigator, OnsPage} from 'angular2-onsenui';

@Component({
  selector: 'ons-page',
  providers: [],
  directives: [],
  template: `
  <div class="page__background"></div>
  <div class="page__content">
    <ons-splitter>
      <ons-splitter-side side="right" width="240px" swipeable collapse #menu>
        <ons-page>
          <ons-list>
            <ons-list-header>Menu</ons-list-header>
            <ons-list-item modifier="longdivider" tappable *ngFor="let i of [1, 2, 3, 4]">
              Menu item #{{i}}
            </ons-list-item>
          </ons-list>
        </ons-page>
      </ons-splitter-side>

      <ons-splitter-content>
        <ons-page>
          <ons-toolbar>
            <div class="left"><ons-back-button>Back</ons-back-button></div>
            <div class="center">Sliding menu</div>
            <div class="right" (click)="menu.open()">
              <ons-toolbar-button>=</ons-toolbar-button>
            </div>
          </ons-toolbar>
          <p>Swipe left to open menu!</p>
        </ons-page>
      </ons-splitter-content>
    </ons-splitter>
  </div>
  `,
  pipes: []
})
export class Splitter {

}
