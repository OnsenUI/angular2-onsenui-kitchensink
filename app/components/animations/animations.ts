import {Component, Inject, forwardRef} from '@angular/core';
import {ONS_DIRECTIVES, OnsNavigator} from 'angular2-onsenui';

@Component({
  selector: 'ons-page',
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
  providers: [],
  directives: [ONS_DIRECTIVES],
  pipes: []
})
export class TempPage {
  animations = ['none', 'fade', 'slide', 'lift'];

  constructor(@Inject(forwardRef(() => OnsNavigator)) private _navigator : OnsNavigator) {
  }

  ngOnInit() {

  }
}

@Component({
  selector: 'animations',
  templateUrl: 'app/components/animations/animations.html',
  providers: [],
  directives: [ONS_DIRECTIVES],
  pipes: []
})
export class Animations {
  animations = ['none', 'fade', 'slide', 'lift'];

  constructor(@Inject(forwardRef(() => OnsNavigator)) private _navigator : OnsNavigator) {
  }

  push(animation) {
    this._navigator.pushComponent(TempPage, { animation });
    setTimeout(() => this._navigator.popComponent(), 1500);
  }

  ngOnInit() {

  }
}

