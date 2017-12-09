import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
	name: "filter",
 	pure: false
})

export class FilterPipe implements PipeTransform {
	transform(input: Animal[], filters){
		let output = input.slice(); // copy the array

		for (var i = 0; i < input.length; i++) {
			var animal = input[i]
			filters.forEach(function(filter) {
				let dataInfo = Animal.dataTypes[filter.dataType]
				let value = animal.data[filter.dataType];
				let comparer = Animal.filterMethods[dataInfo.type][filter.operation].method;
				if (comparer && filter.comparison && value && !comparer(filter.comparison, value)) {
					output.length > 1 ? output.splice(i, 1) : output = [];
				}
			});
		}
		return output;
	}
}
