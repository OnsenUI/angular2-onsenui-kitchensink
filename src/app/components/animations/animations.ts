import {Component} from '@angular/core';
import {OnsNavigator} from 'angular2-onsenui';

@Component({
  selector: 'ons-page[temp]',
  template: `
    <div class="waiting">Please wait...</div>
   `,
  styles: [`
    .waiting {
      text-align: center;
      font-size: 24px;
      margin: 100px auto 0;
    }
  `],
})
export class TempPage {
  animations = ['none', 'fade', 'slide', 'lift'];

  constructor(private _navigator : OnsNavigator) {
  }

  ngOnInit() {

  }
}

@Component({
  selector: 'animations',
  templateUrl: 'app/components/animations/animations.html',
})
export class Animations {
  animations = ['none', 'fade', 'slide', 'lift'];

  constructor(private _navigator : OnsNavigator) {
  }

  push(animation) {
    this._navigator.element.pushPage(TempPage, { animation });
    setTimeout(() => this._navigator.element.popPage(), 1500);
  }

  ngOnInit() {

  }
}

