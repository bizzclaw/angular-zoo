import {Component, Output, EventEmitter} from '@angular/core';
import {Animal} from './Animal.model';

@Component({
  selector: 'animal-new',
  template: `
  <div>
		Hello?!
		<div *ngFor="let key of dataStringsKeys" >
			<p>Enter {{dataStrings[key]}}:</p>
			<input [(ngModel)]="newAnimalData[key]">
		</div>
  </div>
  `
})

export class AnimalNewComponent {
	dataStrings = Animal.dataStrings;
	dataStringsKeys = Object.keys(Animal.dataStrings);
	dataNumbers = Animal.dataNumbers;
	dataNumbersKeys = Object.keys(Animal.dataNumbers);
	newAnimalData = {};

  @Output() sendAddAnimal = new EventEmitter();

}
