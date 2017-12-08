import {Component, Output, EventEmitter} from '@angular/core';
import {Animal} from './Animal.model';

@Component({
  selector: 'animal-new',
	templateUrl: "templates/animal-form.html"
})

export class AnimalNewComponent {
	@Output() sendNewAnimal = new EventEmitter();
	@Output() SendcloseNewAnimal = new EventEmitter();
	title = "Add a new Animal";
	dataTypes = Animal.dataTypes;
	dataTypesKeys = Object.keys(Animal.dataTypes); // no 'for key, value in pairs()' in angular so I have to interate over keys and use that to index the object :(

	animalFormData = {};

	clickClosePanel() {
		this.SendcloseNewAnimal.emit(false);
		this.animalFormData = {}
	}

	clickConfirmAnimal() {
		let newAnimal = Object.assign({}, this.animalFormData) // copy the current "New Animal data so that when we reset the New Animal below, it won't conflict with our entered animal."
		this.sendNewAnimal.emit(newAnimal);
		this.clickClosePanel();
	}
}
