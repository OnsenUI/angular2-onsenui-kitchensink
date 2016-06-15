import {Component, Inject, forwardRef} from '@angular/core';
import {OnsNavigator, OnsPage} from '../../../lib/onsen';

@Component({
  selector: 'ons-page',
  providers: [],
  directives: [],
  template: `
  <ons-toolbar>
    <div class="left"><ons-back-button>Back</ons-back-button></div>
    <div class="center">Speed dial</div>
  </ons-toolbar>
  <p>A speed dial is a Floating action button that expands into a menu.</p>
  <ons-speed-dial position="bottom right">
    <ons-fab>+</ons-fab>
    <ons-speed-dial-item>a</ons-speed-dial-item>
    <ons-speed-dial-item>b</ons-speed-dial-item>
    <ons-speed-dial-item>c</ons-speed-dial-item>
  </ons-speed-dial>
  `,
  pipes: []
})
export class SpeedDial {
}
