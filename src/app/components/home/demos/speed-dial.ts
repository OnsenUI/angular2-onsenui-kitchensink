import {Component} from '@angular/core';

@Component({
  selector: 'ons-page[speed-dial]',
  template: `
  <ons-toolbar>
    <div class="left"><ons-back-button>Back</ons-back-button></div>
    <div class="center">Speed dial</div>
  </ons-toolbar>

  <div class="page__background"></div>
  <div class="page__content">
    <p>A speed dial is a Floating action button that expands into a menu.</p>
    <ons-speed-dial position="bottom right">
      <ons-fab>+</ons-fab>
      <ons-speed-dial-item>a</ons-speed-dial-item>
      <ons-speed-dial-item>b</ons-speed-dial-item>
      <ons-speed-dial-item>c</ons-speed-dial-item>
    </ons-speed-dial>
  </div>
  `,
})
export class SpeedDial {
}
