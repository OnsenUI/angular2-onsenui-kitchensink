import {Component, Inject, forwardRef} from '@angular/core';
import {ONS_DIRECTIVES} from 'angular2-onsenui';

@Component({
  selector: 'ons-page',
  providers: [],
  directives: [ONS_DIRECTIVES],
  template: `
  <ons-toolbar>
    <div class="left"><ons-back-button>Back</ons-back-button></div>
    <div class="center">Infinite Scroll (lazy repeat)</div>
  </ons-toolbar>

  <div class="page__background"></div>
  <div class="page__content">
    <ons-pull-hook></ons-pull-hook>
    <ons-list>
      <!--
      <ons-list-item *onsLazyRepeat="let i of items">
      -->
      <ons-lazy-repeat id="lazyRepeat">
        <ons-list-item>
          <div class="center">
            Item #
          </div>
        </ons-list-item>
       </ons-lazy-repeat>
    </ons-list>
  </div>
  `,
  pipes: []
})
export class LazyRepeat {
  items: Array<any> = [];

  ngOnInit() {
    // for (var i = 0; i < 1000; ++i) {
    //   this.items.push(i);
    // }
    var lazyRepeat: any = document.getElementById('lazyRepeat');

    lazyRepeat.delegate = {
      createItemContent: (i, template) => {
        var element: HTMLElement = template.cloneNode(true);
        element.innerHTML = element.innerHTML.replace('#', i);
        console.log(template, element.innerHTML);
        return element;
      },
      countItems: () => 10000
    };
  }
}
