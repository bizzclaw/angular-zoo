export class Animal {

  public static animals: Animal[] = [];

  // DATA TYPES //
  //These Data types will auto fill themselves into edit/creation forms. Instad of adding that info to both edit and creation forms, they can be pulled directly from this list.
  //dataString values are objects with different properties.
  public static dataTypes: Object = {
    ["name"]: {lang: "Name", type: "string"},
    ["species"]: {lang: "Species", type: "string"},
    ["likes"]: {lang: "Likes", type: "string"},
    ["dislikes"]: {lang: "Dislikes", type: "string"},
    ["location"]: {lang: "Location", type: "string"},
    ["diet"]: {lang: "Diet", type: "string"},
    ["caretakers"]: {lang: "Needed Caretakers", type: "number", min: 1, max: 25},
    ["sex"]: {lang: "Sex", type: "number", min: 0, max: 1, selections: ["Male", "Female"]},
  }



  static getAll() {
    return Animal.animals;
  }

  public id: number;
  constructor(public data: object) {};

  save() {
    this.id = Animal.animals.length;
    Animal.animals.push(this);
  }
}
