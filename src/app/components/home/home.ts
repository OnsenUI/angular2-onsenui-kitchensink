import {Component} from '@angular/core';
// import {OnsSwitch} from '../angular2/src/angular2-onsenui';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  directives: [],//OnsSwitch],
  pipes: []
})
export class Home {
  target: boolean = true;

  constructor() {}

  ngOnInit() {

  }

}
