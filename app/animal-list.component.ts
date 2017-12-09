import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Animal } from './Animal.model';

@Component({
  selector: 'animal-list',
	template: `
    <div class="row">
      <div *ngFor="let filter of filters" class="col-md-4">
        <div class="row">
          <div class="col-md-6">
            <button class="btn btn-default dropdown-toggle filter-dropdown" type="button" id="filter-datatype-{{filter.id}}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              {{dataTypes[filter.dataType].lang}}
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li *ngFor="let type of dataTypeKeys" (click) = "filter.dataType = type" class="dropdown-selection"> - {{dataTypes[type].lang}}</li>
            </ul>
          </div>
          <div class="col-md-6">
            <button class="btn btn-default dropdown-toggle filter-dropdown" type="button" id="filter-operation-{{filter.id}}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              {{filterMethods[dataTypes[filter.dataType].type][filter.operation].lang}}
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li *ngFor="let method of filterMethods[dataTypes[filter.dataType].type]; let i = index" (click) = "filter.operation = i" class="dropdown-selection"> - {{method.lang}}</li>
            </ul>
          </div>
          <div class="col-md-12">
            <input class="form-control" [(ngModel)]="filter.comparison">
          </div>
        </div>
      </div>
    </div>

    <button (click)="clickAddFilter()" class="btn btn-warning">+ Filter</button>

    <div class="animal-list row">
  		<div class="col-md-4" *ngFor="let animal of childAnimalList | filter: filters">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title">{{animal.data.name}}</h2>
          </div>
          <div class="panel-body">
            <ul *ngFor="let dataKey of dataTypeKeys">
              <li *ngIf="dataKey !== 'name'" >{{dataTypes[dataKey].listLang ? dataTypes[dataKey].listLang : dataTypes[dataKey].lang}}: {{dataTypes[dataKey].listDisplay ? dataTypes[dataKey].listDisplay(animal.data[dataKey]) : animal.data[dataKey]}}</li>
            </ul>
    				<button id="edit-{{animal.id}}" (click)="clickEditAnimal(animal)" class="btn btn-info animal-button">Edit</button>
    				<button id="forget-{{animal.id}}" (click)="clickForgetAnimal(animal)" class="btn btn-danger animal-button">forget</button>
          </div>
        </div>
      </div>
		<button (click)="clickNewAnimal()" class="btn btn-info"> + Add New Animal</button>
	`
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
	@Output() sendOpenNewAnimal = new EventEmitter();
	@Output() sendEditAnimal = new EventEmitter();
	@Output() sendForgetAnimal = new EventEmitter();

  dataTypes = Animal.dataTypes
  dataTypeKeys = Object.keys(Animal.dataTypes)

  filterMethods = Animal.filterMethods;

  filters = [];

  clickAddFilter() {
    this.filters.push({
      id: this.filters.length,
      dataType: "name",
      comparison: "",
      operation: 0
    })
  }

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
