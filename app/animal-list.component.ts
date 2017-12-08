import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Animal } from './Animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div *ngFor="let animal of childAnimalList" class="panel pnl-default">
    <div class = "pnl-header">
    <h3>{{animal.data.name}}</h3>
    </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
}
