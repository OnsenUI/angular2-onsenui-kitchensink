import {Component, OnInit, OnDestroy} from '@angular/core';
import {DialogFactory, PopoverFactory, Params, onsNotification} from 'angular2-onsenui';

@Component({
  template: `
    <ons-dialog #dialog animation="default" cancelable>
      <div class="dialog-mask"></div>
      <div class="dialog">
        <div class="dialog-container" style="height: 220px;">
          <ons-page>
            <ons-toolbar>
              <div class="center">Name</div>
            </ons-toolbar>
            <div class="content">
              <div style="text-align: center">
                <p>{{message}}</p>
                <br>
                <ons-button (click)="dialog.hide()">Close</ons-button>
              </div>
            </div>
          </ons-page>
        </div>
      </div>
    </ons-dialog>
  `
})
export class TempDialog {
  message = '';

  constructor(params: Params) {
    this.message = <string>params.at('message');
  }
}

@Component({
  template: `
    <ons-popover #popover direction="up down" cancelable (prehide)="onPreHide($event)">
      <div style="text-align: center;">
        <p>{{message}}</p>
        <p><ons-button (click)="popover.hide()">Hide</ons-button></p>
      </div>
    </ons-popover>
  `
})
export class TempPopover {
  message = '';

  constructor(params: Params) {
    this.message = <string>params.at('msg');
  }

  onPreHide(event) {
    // event.cancel(); // cancel hiding popover
  }
}

@Component({
  selector: 'dialogs',
  templateUrl: 'app/components/dialogs/dialogs.html',
})
export class Dialogs implements OnInit, OnDestroy{
  private _dialog: any;
  private _popover: any;
  private _destroyDialog: Function;
  private _destroyPopover: Function;

  constructor(
    private _dialogFactory: DialogFactory,
    private _popoverFactory: PopoverFactory) {
  }

  ngOnInit() {
    this._dialogFactory
      .createDialog(TempDialog, {message: 'This is just an example.'})
      .then(({dialog, destroy}) => {
        this._dialog = dialog;
        this._destroyDialog = destroy;
      });
    this._popoverFactory
      .createPopover(TempPopover, {msg: 'This is popover.'})
      .then(({popover, destroy}) => {
        this._popover = popover;
        this._destroyPopover = destroy;
      });
  }

  ngOnDestroy() {
    this._destroyDialog();
    this._destroyPopover();
  }

  showDialog() {
    if (this._dialog) {
      this._dialog.show();
    }
  }

  showPopover(event) {
    if (this._popover) {
      this._popover.show(event.target);
    }
  }

  alert() {
    onsNotification.alert('Be careful!');
  }

  confirm(){
    onsNotification.confirm('This is dangerous. Are you sure?');
  }

  prompt(){
    onsNotification.prompt('What\'s 42?');
  }
}
