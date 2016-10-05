import {Component} from '@angular/core';

@Component({
  selector: 'ons-page[fab]',
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
})
export class Fab {

}
