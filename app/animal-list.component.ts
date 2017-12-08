import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Animal } from './Animal.model';

@Component({
  selector: 'animal-list',
	template: `
		<div class="row animal-card" *ngFor="let animal of childAnimalList | filter: childFilters">
			<div class="col-md-3 animal-name">
				<h3>{{animal.data.name}}</h3>
			</div>
			<div class="col-md-6 pnl animal-info">
				<p>Species: {{animal.data.species}}</p>
			</div>
			<div class="col-md-2 pnl animal-controls">
				<button (click)="clickEditAnimal(animal)" class="btn btn-info">Edit</button>
				<button (click)="clickForgetAnimal(animal)" class="btn btn-danger">forget</button>
			</div>
		</div>
		<button (click)="clickNewAnimal()" class="btn btn-info"> + Add New Animal</button>
	`
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Input() childFilters: object;
	@Output() sendOpenNewAnimal = new EventEmitter();
	@Output() sendEditAnimal = new EventEmitter();
	@Output() sendForgetAnimal = new EventEmitter();



	clickNewAnimal() {
		this.sendOpenNewAnimal.emit(true);
	}

	clickEditAnimal(animal: Animal) {
		this.sendEditAnimal.emit(animal.data);
	}

	clickForgetAnimal(animal: Animal) {
		this.sendForgetAnimal.emit(animal);
	}
}
