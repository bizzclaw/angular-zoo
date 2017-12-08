export class Animal {

  public static animals: Animal[] = [];

  // DATA TYPES //
  //These Data types will auto fill themselves into edit/creation forms. Instad of adding that info to both edit and creation forms, they can be pulled directly from this list.
  //dataString values simply equal their localized version
  public static dataStrings: Object = {
    ["name"]: "Name",
    ["species"]: "Species",
    ["likes"]: "Likes",
    ["dislikes"]: "Dislikes",
    ["location"]: "Location",
    ["diet"]: "Diet",
  }

  // dataNumber values are organized into an array, the position in the array links it to a specific key
  //0th entry: Language Value
  //1st entry: min possible
  //2nd entry: Max possible
  public static dataNumbers: Object = {
    ["caretakers"]: ["Needed Caretakers", 1,10],
    ["gender"]: ["Gender", 0,1],
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
