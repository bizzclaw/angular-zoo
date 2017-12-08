import { Component} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <animal-list
      [childAnimalList]="masterAnimalList"
    ></animal-list>
    <animal-new></animal-new>
  </div>
  `
})

export class AppComponent {
  // masterAnimalList = Animal.getAll();
  masterAnimalList = [
    new Animal({
      name: "Snow",
      species: "White Fox"
    }),
    new Animal({
      name: "Fire",
      species: "Lion"
    }),
  ]
}
