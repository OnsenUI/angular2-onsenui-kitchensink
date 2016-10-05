import {Component} from '@angular/core';
import {onsNotification} from 'angular2-onsenui';

@Component({
  selector: 'dialogs',
  templateUrl: 'app/components/dialogs/dialogs.html',
})
export class Dialogs {
  public isOpen: boolean = false;

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
