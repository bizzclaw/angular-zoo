import {Component, Output, EventEmitter} from '@angular/core';
import {Animal} from './Animal.model';

@Component({
  selector: 'animal-new',
  template: `
  <div class="well">
		<h1> Add a new Animal</h1>
		<div *ngFor="let key of dataStringsKeys" class="form-group">
			<p>Enter {{dataStrings[key]}}:</p>
			<input class="form-control" [(ngModel)]="newAnimalData[key]">
		</div>
		<div *ngFor="let key of dataNumbersKeys" class="form-group">
			<p>Enter {{dataNumbers[key][0]}}:</p>
			<input class="form-control" type="number" min = {{dataNumbers[key][1]}} max = {{dataNumbers[key][2]}} [(ngModel)]="newAnimalData[key]">
		</div>
		<button (click)="clickNewAnimal()" class="btn btn-success">Confirm</button>
		<button (click)="clickClosePanel()" class="btn btn-danger">Cancel</button>
  </div>
  `
})

export class AnimalNewComponent {
	@Output() sendNewAnimal = new EventEmitter();
	@Output() SendcloseNewAnimal = new EventEmitter();

	dataStrings = Animal.dataStrings;
	dataStringsKeys = Object.keys(Animal.dataStrings); // no 'for key, value in pairs()' in angular so I have to interate over keys and use that to index the object :(
	dataNumbers = Animal.dataNumbers;
	dataNumbersKeys = Object.keys(Animal.dataNumbers);
	newAnimalData = {};

	clickClosePanel() {
		this.SendcloseNewAnimal.emit(false);
		this.newAnimalData = {}
	}

	clickNewAnimal() {
		let newAnimal = Object.assign({}, this.newAnimalData) // copy the current "New Animal data so that when we reset the New Animal below, it won't conflict with our entered animal."
		this.sendNewAnimal.emit(newAnimal);
		this.clickClosePanel();
	}
}
