import {Component, Inject, forwardRef} from '@angular/core';
import {OnsNavigator, OnsPage} from 'angular2-onsenui';

@Component({
  selector: 'ons-page',
  providers: [],
  directives: [],
  template: `
  <ons-toolbar>
    <div class="left"><ons-back-button>Back</ons-back-button></div>
    <div class="center">Floating Action Button</div>
  </ons-toolbar>

  <div class="page__background"></div>
  <div class="page__content">
    <ons-fab position="bottom right" ripple>+</ons-fab>
  </div>
  `,
  pipes: []
})
export class Fab {

}
