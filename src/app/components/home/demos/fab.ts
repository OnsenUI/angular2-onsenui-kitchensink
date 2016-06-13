import {Component, Inject, forwardRef} from '@angular/core';
import {OnsNavigator, OnsPage} from '../../../lib/onsen';

@Component({
  selector: 'ons-page',
  providers: [],
  directives: [],
  template: `
  <ons-toolbar>
    <div class="left"><ons-back-button>Back</ons-back-button></div>
    <div class="center">Floating Action Button</div>
  </ons-toolbar>
  <ons-fab position="bottom right" ripple>+</ons-fab>
  `,
  pipes: []
})
export class Fab {

}
