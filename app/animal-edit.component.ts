import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './Animal.model';

@Component({
  selector: 'animal-edit',
	templateUrl: "templates/animal-form.html"
})

export class AnimalEditComponent {
	@Input() animalFormData: object;
	@Output() sendNewAnimal = new EventEmitter();
	@Output() SendcloseEditAnimal = new EventEmitter();
	title = "Edit Animal";
	dataTypes = Animal.dataTypes;
	dataTypesKeys = Object.keys(Animal.dataTypes); // no 'for key, value in pairs()' in angular so I have to interate over keys and use that to index the object :(

	clickClosePanel() {
		this.SendcloseEditAnimal.emit(false);
		this.animalFormData = {}
	}

	clickConfirmAnimal() {
		let updatedAnimal = Object.assign({}, this.animalFormData) // copy the current "New Animal data so that when we reset the New Animal below, it won't conflict with our entered animal."
		this.sendNewAnimal.emit(updatedAnimal);
		this.clickClosePanel();
	}
}
