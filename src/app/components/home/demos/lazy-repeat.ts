import {Component} from '@angular/core';

@Component({
  selector: 'ons-page[lazy-repeat]',
  template: `
  <ons-toolbar>
    <div class="left"><ons-back-button>Back</ons-back-button></div>
    <div class="center">Infinite Scroll (lazy repeat)</div>
  </ons-toolbar>

  <div class="page__background"></div>
  <div class="page__content">
    <ons-list>
      <ons-list-item *onsLazyRepeat="let item of items; let i = index">
        Item {{i}}
      </ons-list-item>
    </ons-list>
  </div>
  `,
})
export class LazyRepeat {
  items: Array<any> = [];

  ngOnInit() {
    for (var i = 0; i < 1000; ++i) {
      this.items.push(i);
    }
  }
}
