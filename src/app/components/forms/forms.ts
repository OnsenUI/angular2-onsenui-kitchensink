import {Component} from '@angular/core';

@Component({
  selector: 'forms',
  templateUrl: 'app/components/forms/forms.html',
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
