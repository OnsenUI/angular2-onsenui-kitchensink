import {Component} from '@angular/core';
import {ONS_DIRECTIVES} from '../../lib/onsen';


@Component({
  selector: 'animations',
  templateUrl: 'app/components/animations/animations.html',
  providers: [],
  directives: [ONS_DIRECTIVES],
  pipes: []
})
export class Animations {
  animations = ['None', 'Fade', 'Slide', 'Lift'];

  constructor() {

  }

  ngOnInit() {

  }
}
