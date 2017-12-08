import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Animal } from './Animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div *ngFor="let animal of childAnimalList" class="row animal-card">
		<div class="col-md-3 animal-name">
	    <h3>{{animal.data.name}}</h3>
    </div>
		<div class="col-md-8 pnl animal-info">
			<p>Species: {{animal.data.species}}</p>
    </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
}
