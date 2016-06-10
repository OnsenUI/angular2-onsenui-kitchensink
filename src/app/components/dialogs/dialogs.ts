import {Component} from '@angular/core';
import {onsNotification, OnsAlertDialog, ONS_DIRECTIVES} from '../../lib/onsen';

@Component({
  selector: 'dialogs',
  templateUrl: 'app/components/dialogs/dialogs.html',
  directives: [ONS_DIRECTIVES],
  pipes: []
})
export class Dialogs {
  target: boolean = true;

  constructor() { }

  ngOnInit() {

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

  showDialog(){

  }

  showPopover(){

  }


}
