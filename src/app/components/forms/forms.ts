import {Component} from '@angular/core';
import {ONS_DIRECTIVES} from 'angular2-onsenui';

@Component({
  selector: 'forms',
  templateUrl: 'app/components/forms/forms.html',
  directives: [ONS_DIRECTIVES],
  pipes: []
})
export class Forms {
  target = true;

  switchEnabled = true;

  vegetables = [
    'Tomato',
    'Cabbage',
    'Cucumber'
  ];

  selectedVegetable = 'Cabbage';

  colors = [
    'Red',
    'Blue',
    'Green',
    'Yellow'
  ];

  name = 'Argelius';

  constructor() { }

  ngOnInit() {
  }

}
