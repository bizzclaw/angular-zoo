import { Component} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div *ngIf="!newAnimalDisplay && !editingAnimal">
      <animal-list
        [childAnimalList]="masterAnimalList"
        (sendOpenNewAnimal)="toggleNewAnimal($event)"
        (sendEditAnimal)="setEditAnimal($event)"
        (sendForgetAnimal)="forgetAnimal($event)"
      ></animal-list>
    </div>
    <animal-edit *ngIf="editingAnimal"
      [animalFormData]="editingAnimal"
      (SendcloseEditAnimal)="setEditAnimal($event)"
      (sendUpdateAnimal)="updateAnimalData($event)"
    ></animal-edit>
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
  editingAnimal: object;

  toggleNewAnimal(show: boolean) {
    this.newAnimalDisplay = show;
  }

  addNewAnimal(animalData) {
    let newAnimal = new Animal(animalData);
    // newAnimal.save();
    this.masterAnimalList.push(newAnimal);
  }

  setEditAnimal(animalData) {
    this.editingAnimal = animalData;
  }

  forgetAnimal(animal: Animal) {
    this.masterAnimalList.splice(animal.id, 1);
  }
}
