import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
	name: "filter",
 	pure: false
})

export class FilterPipe implements PipeTransform {
	transform(input: Animal[], filters){
		let output = input;

		for (var i = 0; i < input.length; i++) {
			var animal = input[i]
			filters.forEach(function(filter) {
				let dataInfo = Animal.dataTypes[filter.dataType]
				let value = animal.data[filter.dataType];
				let comparer = Animal.filterMethods[dataInfo.type][filter.operation]
				if (comparer && !comparer(filter.comparison, value)) {
					output.splice(i, 1);
				}
			});
		}
		return output;
	}
}
