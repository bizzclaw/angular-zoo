import { Component} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div *ngIf="!newAnimalDisplay">
      <animal-list
        [childAnimalList]="masterAnimalList"
        (sendOpenNewAnimal)="toggleNewAnimal($event)"
        (sendForgetAnimal)="forgetAnimal($event)"
      ></animal-list>
    </div>
    <animal-new *ngIf="newAnimalDisplay"
      (SendcloseNewAnimal)="toggleNewAnimal($event)"
      (sendNewAnimal)="addNewAnimal($event)"
    ></animal-new>
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

  newAnimalDisplay: boolean = false;
  toggleNewAnimal(show: boolean) {
    this.newAnimalDisplay = show;
  }

  addNewAnimal(animalData) {
    let newAnimal = new Animal(animalData);
    // newAnimal.save();
    this.masterAnimalList.push(newAnimal);
  }

  forgetAnimal(animal) {
    this.masterAnimalList.splice(animal.id, 1);
  }
}
