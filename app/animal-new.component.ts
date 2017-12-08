import {Component, Output, EventEmitter} from '@angular/core';
import {Animal} from './Animal.model';

@Component({
  selector: 'animal-new',
  template: `
  <div class="well">
		<h1> Add a new Animal</h1>
		<div *ngFor="let key of dataTypesKeys" class="form-group">
			<p>Enter {{dataTypes[key].lang}}:</p>
			<input type="{{dataTypes[key].type}}" min={{dataTypes[key]?.min}} max = {{dataTypes[key]?.max}} class="form-control" [(ngModel)]="newAnimalData[key]">
		</div>
		<button (click)="clickNewAnimal()" class="btn btn-success">Confirm</button>
		<button (click)="clickClosePanel()" class="btn btn-danger">Cancel</button>
  </div>
  `
})

export class AnimalNewComponent {
	@Output() sendNewAnimal = new EventEmitter();
	@Output() SendcloseNewAnimal = new EventEmitter();

	dataTypes = Animal.dataTypes;
	dataTypesKeys = Object.keys(Animal.dataTypes); // no 'for key, value in pairs()' in angular so I have to interate over keys and use that to index the object :(

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
