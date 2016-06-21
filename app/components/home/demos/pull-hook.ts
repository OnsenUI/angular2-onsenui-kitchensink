import {Component, Inject, forwardRef} from '@angular/core';
import {OnsNavigator, OnsPage} from 'angular2-onsenui';

@Component({
  selector: 'ons-page',
  providers: [],
  directives: [],
  template: `
  <ons-toolbar>
    <div class="left"><ons-back-button>Back</ons-back-button></div>
    <div class="center">Pull to refresh</div>
  </ons-toolbar>

  <div class="page__background"></div>
  <div class="page__content">
    <div class="scroll">
      <ons-pull-hook height="64px" threshold-height="128px" (changestate)="onChangeState(pullHook)" [onAction]="boundOnAction" #pullHook>
        {{message}}
      </ons-pull-hook>

      <ons-list>
        <ons-list-item *ngFor="let item of data">
          <div class="left"><img class="list__item__thumbnail" [src]="item.url"></div>
          <div class="center">{{item.name}}</div>
        </ons-list-item>
      </ons-list>
    </div>
  </div>
  `,
  pipes: []
})
export class PullHook {
  data: Array<any> = [];

  timeout: any = 0;

  message: string = 'Pull down to refresh';

  messages: { [key: string]: string } = {
    initial: 'Pull down to refresh',
    preaction: 'Release to refresh',
    action: 'Loading data...'
  };

  boundOnAction: Function;

  getRandomName() {
    const names = ['Oscar', 'Max', 'Tiger', 'Sam', 'Misty', 'Simba', 'Coco', 'Chloe', 'Lucy', 'Missy'];
    return names[Math.floor(Math.random() * names.length)];
  }

  getRandomUrl() {
    var width = 40 + Math.floor(20 * Math.random());
    var height= 40 + Math.floor(20 * Math.random());

    return `https://placekitten.com/g/${width}/${height}`;
  }

  getRandomKitten() {
    return {
      name: this.getRandomName(),
      url: this.getRandomUrl()
    };
  }

  updateData() {
    this.data = [];

    for (let i = 0; i < 20; i++) {
      this.data.push(this.getRandomKitten());
    }
  }

  ngOnInit() {
    this.updateData();
    this.boundOnAction = this.onAction.bind(this);
  }

  onAction(done: Function) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.updateData();
      done();
    }, 1000);
  }

  onChangeState(pullHook) {
    this.message = this.messages[pullHook.state];
  }
}
