export class Animal {

  public static animals: Animal[] = [];

  // DATA TYPES //
  //These Data types will auto fill themselves into edit/creation forms. Instad of adding that info to both edit and creation forms, they can be pulled directly from this list.
  //dataString values are objects with different properties.

  public static typeEnforcements = {
    ["number"]: function(input) {
      return parseInt(input)
    },
    ["date"]: function(input) {
      return new Date(input);
    }
  }

  static EnforceTypes(data) {
    let keys = Object.keys(data)
    keys.forEach(function(k) {
      let v = data[k]
      let dataInfo = Animal.dataTypes[k]

      let typeEnforcement = Animal.typeEnforcements[dataInfo.type]
      data[k] =  typeEnforcement? typeEnforcement(data[k]) : data[k]
    });
    return data
  }

  public static dataTypes: Object = {
    ["name"]: {lang: "Name", type: "string"},
    ["species"]: {lang: "Species", type: "string"},
    ["likes"]: {lang: "Likes", type: "string"},
    ["dislikes"]: {lang: "Dislikes", type: "string"},
    ["location"]: {lang: "Location", type: "string"},
    ["diet"]: {lang: "Diet", type: "string"},
    ["dob"]: {lang: "Date of Birth", type: "date"},
    ["caretakers"]: {lang: "Needed Caretakers", type: "number", min: 1, max: 25},
    ["sex"]: {lang: "Sex", type: "number", min: 0, max: 1, selections: ["Male", "Female"]},
  }

  static getAll() {
    return Animal.animals;
  }

  public id: number;
  public data: object;
  constructor(data: object) {
    this.data = Animal.EnforceTypes(data);
  };

  save() {
    this.id = Animal.animals.length;
    Animal.animals.push(this);
    console.log(Animal.animals);
  }
}
