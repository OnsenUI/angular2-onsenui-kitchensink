import {Component} from '@angular/core';
import {onsNotification, OnsPopover, ONS_DIRECTIVES, PopoverFactory, AlertDialogFactory} from 'angular2-onsenui';

@Component({
  selector: 'dialogs',
  templateUrl: 'app/components/dialogs/dialogs.html',
  directives: [ONS_DIRECTIVES],
  pipes: []
})
export class Dialogs {
  public isOpen: boolean = false;

  // constructor(
  //   private _popoverFactory: PopoverFactory,
  //   private _alertDialogFactory: AlertDialogFactory
  // ) { }

  alert() {
    onsNotification.alert('Be careful!');
  }

  confirm(){
    onsNotification.confirm('This is dangerous. Are you sure?');
  }

  prompt(){
    onsNotification.prompt('What\'s 42?');
  }

  showDialog(){
  }

  showPopover(){
    // this._popoverFactory.createPopover(OnsPopover);
  }

}
